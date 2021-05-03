import React, { useState, useCallback, useMemo } from "react";
import Link from "next/link";
import styled from "styled-components";
import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";

import useInput from "../hooks/useInput";
import { loginAction } from "../reducers/user";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = () => {
  const dispatch = useDispatch();
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    //setIsLoggedIn(true);
    dispatch(loginAction({ id, password }));
  }, [id, password]);

  //useMemo는 값을 캐싱한다.
  const style = useMemo(() => ({ marginTop: 10 }), []);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      {/* 
      1. 왠만해서는 인라인 style을 주지 말자 객체를 사용하게 되면 렌더링 이후에 리렌더링을 하기 때문에 비효율적이다.
      2. 버튼에다가 htmlType = submit을 붙어줘야 form이 submit이 된다.
      */}
      <ButtonWrapper style={style}>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default LoginForm;
