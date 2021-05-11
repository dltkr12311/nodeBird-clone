import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Avatar, Button } from "antd";

import { logoutRequestAction } from "../reducers/user";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, isLogginOut } = useSelector((state) => state.user);

  const onLogOut = useCallback(() => {
    dispatch(logoutRequestAction());
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
        <Card.Meta avatar={<Avatar>{me.nickname[0]}</Avatar>} title={me.nickname} />
        {/* loading이 true이면 버튼이 로딩버튼으로 바뀐다. */}
        <Button onClick={onLogOut} loading={isLogginOut}>
          로그아웃
        </Button>
      </Card>
    </>
  );
};

export default UserProfile;
