import { useParams } from "react-router";
import React, { useState, useEffect } from "react";
import * as coursesClient from "../client";
import * as modulesClient from "./client";

import {
  setModules,
  addModule,
  editModule,
  updateModule,
  deleteModule,
} from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import LessonControlButtons from "./LessonControlButtons";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();
  const saveModule = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };

  const removeModule = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };

  const createModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await coursesClient.createModuleForCourse(cid, newModule);
    dispatch(addModule(module));
  };

  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, []);

  const isFaculty = currentUser?.role === "FACULTY";

  return (
    <div className="wd-modules">
      {isFaculty && (
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="mb-0">Modules</h4>
          <ModulesControls
            moduleName={moduleName}
            setModuleName={setModuleName}
            addModule={() => {
              dispatch(addModule({ name: moduleName, course: cid }));
              setModuleName("");
            }}
          />
        </div>
      )}

      <ul className="list-group rounded-0" id="wd-modules">
        {modules.map((module: any) => (
          <li
            key={module._id}
            className="wd-module list-group-item p-0 mb-5 border-gray"
          >
            <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                {!module.editing ? (
                  module.name
                ) : (
                  <input
                    className="form-control w-50 d-inline-block"
                    onChange={(e) =>
                      dispatch(
                        updateModule({ ...module, name: e.target.value })
                      )
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        saveModule({ ...module, editing: false });
                      }
                    }}
                    defaultValue={module.name}
                  />
                )}
              </div>

              {isFaculty && (
                <ModuleControlButtons
                  moduleId={module._id}
                  // deleteModule={(moduleId) => {
                  //   dispatch(deleteModule(moduleId));
                  // }}
                  deleteModule={(moduleId) => removeModule(moduleId)}
                  editModule={(moduleId) => dispatch(editModule(moduleId))}
                />
              )}
            </div>

            {module.lessons && (
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson: any) => (
                  <li
                    key={lesson._id}
                    className="wd-lesson list-group-item p-3 ps-1"
                  >
                    <BsGripVertical className="me-2 fs-3" />
                    {lesson.name}
                    {isFaculty && <LessonControlButtons />}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
