import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Card, Avatar, Button } from "antd";

import { logoutAction } from "../reducers/user";

const UserProfile = () => {
  const dispatch = useDispatch();

  const onLogOut = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  return (
    <>
      <Card
        actions={[
          <div key="twit">
            짹짹 <br />0
          </div>,
          <div key="follwings">
            팔로잉 <br />0
          </div>,
          <div key="follwers">
            팔로워 <br />0
          </div>,
        ]}
      >
        <Card.Meta avatar={<Avatar>LS</Avatar>} title="LeeSak" />
        <Button onClick={onLogOut}>로그아웃</Button>
      </Card>
    </>
  );
};

export default UserProfile;
