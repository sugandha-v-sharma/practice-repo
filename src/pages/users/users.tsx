import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import React, { useEffect, useState } from "react";
import { useToast } from "../../components/ui/use-toast"

function Users() {
  type User = {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    age: number;
    email: string;
  };
  const [userList, setUserList] = useState<User[]>([]);
  const [searchItem, setSearchItem] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
    const { toast } = useToast()

  const getUserData = (): void => {
    setLoading(true);
    let userListResponse = fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((res) => {
        setUserList(res?.users);
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getUserData();
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
    const filtered = userList?.filter(
      (item: any, key: number) =>
        item?.firstName?.toLowerCase() === searchItem?.toLowerCase() ||
        item?.lastName?.toLowerCase() === searchItem?.toLowerCase() ||
        item?.age === parseInt(searchItem) ||
        item?.gender?.toLowerCase() === searchItem?.toLowerCase() ||
        item?.email?.toLowerCase() === searchItem?.toLowerCase()
    );
    if (filtered.length === 0) {
      toast({
        title: "Error!",
        description: "data not available",
        variant : "error"
      })
      getUserData();
    } else {
      setUserList(filtered);
    }
  };

  const resetItem = (): void => {
    getUserData();
    setSearchItem("");
  };

  return (
    <div className="p-6">
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <>
         <div className="text-center font-bold text-lg p-4">User Data</div>
          <div className="flex">
           
            <Input
              name="searchBox"
              aria-label="searchBox" //It is an accessibility attribute used to give a label to an element
              placeholder="Search"
              type="text"
              // className="w-1/6 border p-1"
              onChange={(e) => {
                setSearchItem(e?.target?.value);
              }}
            />
            &nbsp;&nbsp;&nbsp;
            <Button
              shape="rounded"
              variant="hover"
              onClick={() => {
                getSearchedItem();
              }}
            >
              Search
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button
              shape="rounded"
              variant="hover"
              onClick={() => {
                resetItem();
              }}
            >
              Reset
            </Button>
          </div>
          <br/>
          <div> {getUserList()}</div>
        </>
      )}
    </div>
  );
}

export default Users;
