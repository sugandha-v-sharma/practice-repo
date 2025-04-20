import React, { useEffect, useState } from "react";
import { LIST_OF_TASKS } from "../../utils/constants";
import TodoListModal from "../../components/todoListModal";

function ToDoList() {
  type List = {
    id: number;
    task: string;
    taskAssigner: string;
    projectName: string;
    isTaskCompleted: boolean;
  };

  const [taskList, setTaskList] = useState<List[]>([]);
  const [isOpenAddTaskModal, setIsOpenAddTaskModal] = useState<boolean>(false);

  useEffect(() => {
    setTaskList(LIST_OF_TASKS);
  }, []);

  const taskCompletion = (id: number): void => {
    const updatedList = taskList?.map((item: List, key: number) => {
      if (item?.id == id) {
        return {
          ...item,
          isTaskCompleted: !item.isTaskCompleted,
        };
      }
      return item;
    });
  };

  const removeItem = (id: number): void => {
    const updatedList = taskList.filter((item) => item.id !== id);
    setTaskList(updatedList);
  };

  const getTaskList = (): any => {
    return taskList?.map((item: List, key: number) => (
      <div
        key={key}
        className="flex items-start border p-4 m-2 rounded shadow mt-4"
      >
        <div className="flex-1 flex">
          <input
            type="checkbox"
            checked={item?.isTaskCompleted}
            onChange={() => {
              taskCompletion(item?.id);
            }}
          />
          <div className="ml-5">
            <div>
              <strong>Project Name:</strong> {item.projectName}
            </div>
            <div>
              <strong>Task:</strong> {item.task}
            </div>
            <div>
              <strong>Assigner:</strong> {item.taskAssigner}
            </div>
          </div>
        </div>

        <button
          className="bg-red-500 hover:bg-red-700 px-3 py-1 rounded text-white"
          onClick={() => {
            removeItem(item?.id);
          }}
        >
          Remove
        </button>
      </div>
    ));
  };

  return (
    <div className="overflow-x-auto max-w-full max-h-[600px] overflow-y-auto">
      <div className="text-center font-bold text-lg p-4">To-do List</div>
      <button
        className="bg-blue-500 hover:bg-blue-900 p-1 rounded text-white mt-4 m-2"
        onClick={() => {
          setIsOpenAddTaskModal(true);
        }}
      >
        Add a Task
      </button>
      {getTaskList()}
      {isOpenAddTaskModal && (
        <TodoListModal
          setIsOpenAddTaskModal={setIsOpenAddTaskModal}
          setTaskList={setTaskList}
          taskList={taskList}
        />
      )}
    </div>
  );
}

export default ToDoList;
