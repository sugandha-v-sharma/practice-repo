import React, { useEffect, useState } from "react";

function Users() {

  type User = {
    id: number,
    firstName: string,
    lastName: string,
    gender : string,
    age: number,
    email: string,
  }
  const [userList, setUserList] = useState<User[]>([]);
  const [searchItem, setSearchItem] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const getUserData = ():void => {
    setLoading(true);
    let userListResponse = fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((res) => {
        setUserList(res?.users);
      })
      .catch((error) => {
      })
      .finally(() => {
        setLoading(false);
      });
  }
  
  useEffect(() => {
    getUserData()
  }, []);

  const getUserList = (): any => {
    return (
      <div className="overflow-x-auto max-w-full max-h-[400px] overflow-y-auto mt-6">
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">
                Id
              </th>
              <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">
                First Name
              </th>
              <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">
                Last Name
              </th>
              <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">
                Gender
              </th>
              <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">
                Age
              </th>
              <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {userList?.map((item: any, key: number) => {
              return (
                <tr>
                  <td className="px-4 py-2 border-b text-sm">{item?.id}</td>
                  <td className="px-4 py-2 border-b text-sm">
                    {item?.firstName}
                  </td>
                  <td className="px-4 py-2 border-b text-sm">
                    {item?.lastName}
                  </td>
                  <td className="px-4 py-2 border-b text-sm">{item?.gender}</td>
                  <td className="px-4 py-2 border-b text-sm">{item?.age}</td>
                  <td className="px-4 py-2 border-b text-sm">{item?.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  const getSearchedItem = (): void => {
    const filtered = userList?.filter((item: any, key:number) =>
      item?.firstName?.toLowerCase() === searchItem?.toLowerCase() ||
        item?.lastName?.toLowerCase() === searchItem?.toLowerCase() ||
        item?.age === parseInt(searchItem )||
        item?.gender?.toLowerCase() === searchItem?.toLowerCase() ||
        item?.email?.toLowerCase() === searchItem?.toLowerCase()
    );
    if (filtered.length === 0) {
      alert("Data is not available");
      getUserData(); 
    } else {
      setUserList(filtered);
    }
  };

  const resetItem = (): void => {
    getUserData(); 
    setSearchItem("")
  }

  return (
    <div className="p-6">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <input
            name="searchBox"
            aria-label="searchBox" //It is an accessibility attribute used to give a label to an element 
            placeholder="Search"
            type="text"
            className="w-1/6 border p-2"
            onChange={(e) => {
              setSearchItem(e?.target?.value);
            }}
          />&nbsp;&nbsp;&nbsp;
          <button
          type="button"
            className="bg-blue-500 hover:bg-blue-900 p-2 rounded text-white mt-4"
            onClick={() => {
              getSearchedItem();
            }}
          >
            Search
          </button>&nbsp;&nbsp;&nbsp;
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-900 p-2 rounded text-white mt-4"
            onClick={() => {
              resetItem();
            }}
          >
            Reset
          </button>

          {getUserList()}
        </>
      )}
    </div>
  );
}

export default Users;
