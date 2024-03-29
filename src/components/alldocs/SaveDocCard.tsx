import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";

import { IoDocumentText, IoEllipsisVerticalOutline } from "react-icons/io5";
import { MdDeleteForever, MdDriveFileRenameOutline } from "react-icons/md";
import { useState } from "react";
import { SaveDocCardProps } from "./EachDocCard";

const SaveDocCard = ({ ImgC, Name, SubTitle } : SaveDocCardProps) => {
  const [docName, setDocName] = useState(Name);
  const containerStyles =
    "rounded-t-sm cursor-pointer border border-gray-400 hover:border-violet-500 hover:border-2 overflow-hidden";
  return (
    <div className="w-1/2 md:w-1/4 lg:w-1/5 mt-1 mb-5">
      <div className="w-5/6 mx-auto">
        <div className={containerStyles}>
          <img src={ImgC} className="w-full" />
        </div>
        <div className="border-x rounded-b-sm border-b border-gray-400 h-16 p-1 flex justify-between items-center">
          <div className="flex flex-col w-4/5 overflow-hidden lg:text-sm md:text-sm text-xs">
            <div className="text-gray-900 font-bold whitespace-nowrap overflow-hidden">
              {Name.length > 12 ? `${Name.slice(0, 11)}...` : Name}
            </div>
            <div className=" flex h-fit items-center mt-2 whitespace-nowrap">
              <IoDocumentText className="text-violet-700 w-6 h-6 md:mr-2 mr-1" />
              <p className="text-xs text-gray-600">{ SubTitle}</p>
            </div>
          </div>
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger className="hover:bg-violet-200 h-8 w-8 flex justify-center items-center rounded-full">
              <IoEllipsisVerticalOutline />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="shadow-md bg-white rounded-sm border p-2">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <DropdownMenuItem
                    onSelect={(e) => e.preventDefault()}
                    className="flex items-center py-1 px-2 rounded-sm hover:!bg-violet-200 cursor-pointer">
                    <MdDriveFileRenameOutline className="mr-3" />
                    Rename
                  </DropdownMenuItem>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Rename</AlertDialogTitle>
                    <AlertDialogDescription>
                      Please enter a new name for the item:
                      <input
                        type="text"
                        value={docName}
                        onChange={(e) => {
                          setDocName(e.target.value);
                        }}
                        className="py-1 px-2 w-full border-2  outline-violet-800 my-2"
                      />
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel
                      onClick={() => {
                        setDocName(Name);
                      }}
                      className="hover:text-gray-800 hover:border-violet-500 text-violet-800">
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                      className={
                        docName == ""
                          ? "bg-gray-200 text-gray-700 hover:bg-gray-200 hover:text-gray-700 cursor-not-allowed "
                          : ""
                      }>
                      Save
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <DropdownMenuItem
                    onSelect={(e) => e.preventDefault()}
                    className="flex items-center py-1 px-2 rounded-sm hover:!bg-violet-200 cursor-pointer">
                    <MdDeleteForever className="mr-3" />
                    Delete
                  </DropdownMenuItem>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Delete</AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you to delete it permanently ?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="hover:text-gray-800 hover:border-violet-500 text-violet-800">
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction>Delete</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default SaveDocCard;
