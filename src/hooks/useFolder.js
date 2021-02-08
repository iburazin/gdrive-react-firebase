import { useReducer, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { database } from "../firebase";

const ACTIONS = {
  SELECT_FOLDER: "select-folder",
  UPDATE_FOLDER: "update-folder",
  SET_CHILD_FOLDERS: "set-child-folders",
  SET_CHILD_FILES: "set-child-files"
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.SELECT_FOLDER:
      return {
        folderId: payload.folderId,
        folder: payload.folder,
        childFiles: [],
        childFolders: []
      };
    case ACTIONS.UPDATE_FOLDER:
      return {};
    case ACTIONS.SET_CHILD_FOLDERS: {
      return;
    }
    case ACTIONS.SET_CHILD_FILES: {
      return;
    }
    default:
      return state;
  }
}

export function useFolder(folderId = null, folder = null) {
  const [state, dispatch] = useReducer(reducer, {
    folderId,
    folder,
    childFolders: [],
    childFiles: []
  });

  useEffect(() => {
    dispatch({ type: ACTIONS.SELECT_FOLDER, payload: { folderId, folder } });
  }, [folderId, folder]);
}
