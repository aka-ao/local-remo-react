import React from "react";
import axios from "axios";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import WifiIcon from "@material-ui/icons/Wifi";
import { deleteSignal } from "../../reducks/signals/operations";
import { useDispatch, useSelector } from "react-redux";

import { baseURL } from "../../remo";

const SignalArea = (props) => {
  const dispatch = useDispatch();
  const executeSignal = (id) => {
    axios
      .post(baseURL + "/signal", { id: id })
      .then((res) => {
        alert("実行しました。");
      })
      .catch((error) => {
        alert("実行に失敗しました。");
      });
  };

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={props.signal.name} />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="signal"
          onClick={() => executeSignal(props.signal.id)}
        >
          <WifiIcon />
        </IconButton>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => dispatch(deleteSignal(props.signal.id))}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default SignalArea;
