import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast"

interface ModalProps {
  setIsOpenAddTaskModal: any;
  setTaskList: any;
  taskList: any;
}

function ToDoListModal({
  setIsOpenAddTaskModal,
  setTaskList,
  taskList,
}: ModalProps) {
  const [projectName, setProjectName] = useState<string>("");
  const [task, setTask] = useState<string>("");
  const [taskAssigner, setTaskAssigner] = useState<string>("");
  const { toast } = useToast()

  const addTask = (): any => {
    if (task == "" || taskAssigner == "" || projectName == "") {
      toast({
        title: "Alert!",
        description: "Please fill all the mandatory fields",
        variant : "alert"
      })
    } else {
      let newTask = {
        task: task,
        taskAssigner: taskAssigner,
        projectName: projectName,
      };
      setTaskList([...taskList, newTask]);
      setIsOpenAddTaskModal(false);
      toast({
        title: "Success!",
        description: "Task added successfully",
        variant : "success"
      })
    }
  };

  const reset = (): any => {
    setProjectName("");
    setTask("");
    setTaskAssigner("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-[400px] relative">
        <h2 className="text-xl font-bold mb-4 text-center">Add a New Task</h2>
        <div className="p-4 flex">
          <label className="w-1/2 text-right pr-4" htmlFor="projectName">
            Project Name<span className="text-red-500">*</span>
          </label>
          <Input
          variant="modal"
            aria-label="projectName"
            id="projectName"
            // className="w-1/2 border p-1"
            onChange={(e) => {
              setProjectName(e.target.value);
            }}
            value={projectName}
          />
        </div>
        <div className="p-4 flex">
          <label className="w-1/2 text-right pr-4" htmlFor="taskName">
            Task<span className="text-red-500">*</span>
          </label>
          <Input
          variant="modal"
            aria-label="taskName"
            id="taskName"
            // className="w-1/2 border p-1"
            onChange={(e) => {
              setTask(e.target.value);
            }}
            value={task}
          />
        </div>
        <div className="p-4 flex">
          <label className="w-1/2 text-right pr-4" htmlFor="assigner">
            Assigner<span className="text-red-500">*</span>
          </label>
          <Input
          variant="modal"
            aria-label="assigner"
            id="assigner"
            // className="w-1/2 border p-1"
            onChange={(e) => {
              setTaskAssigner(e.target.value);
            }}
            value={taskAssigner}
          />
        </div>
        <div className="text-center">
          <Button
            shape="rounded"
        variant="hover"
            onClick={() => {
              addTask();
            }}
          >
            Add
          </Button>
          &nbsp;&nbsp;
          <Button
            shape="rounded"
        variant="hover"
            onClick={() => {
              reset();
            }}
          >
            Reset
          </Button>
        </div>

        <button
          onClick={() => setIsOpenAddTaskModal(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default ToDoListModal;
