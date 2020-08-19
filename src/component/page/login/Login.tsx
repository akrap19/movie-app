import React from "react";
import { Input, Form, Row, Col, Button, Alert } from "antd";
import { connect } from "react-redux";
import { login } from "../../../redux/login/login.actions";

import "../../../asset/style/login.scss";
import "antd/dist/antd.css";

interface ILoginViewState {
  showErrorMessage: boolean;
}

class Login extends React.Component<ILoginViewState> {
  state: ILoginViewState = {
    showErrorMessage: false,
  };

  render = () => {
    const onFinish = (values: any) => {
      this.setState({ showErrorMessage: false });
      login(values.email, values.password).catch((error) => {
        this.setState({ showErrorMessage: true });
      });
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log("Failed:", errorInfo);
    };
    return (
      <div className="login">
        <div className="login_container">
          {this.state.showErrorMessage ? (
            <Alert
              className="login_error_alert"
              message="Neuspješna prijava"
              type="error"
            />
          ) : null}
          <div className="login_form_container">
            <div className="login_form">
              <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                layout="vertical"
                className="login_loginForm"
              >
                <Row>
                  <Col md={12} sm={24}>
                    <div className="login_loginForm">
                      <div className="login_welcomeMessage">
                        <p>Login</p>
                      </div>
                      <span className="input_tag">{"Email*"}</span>
                      <Form.Item
                        name="email"
                        rules={[
                          {
                            required: true,
                            message: "Email can not be empty",
                          },
                          {
                            type: "email",
                            message: "This is not email",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                      <span className="input_tag">{"Password*"}</span>
                      <Form.Item
                        name="password"
                        rules={[
                          {
                            required: true,
                            message: "Password can not be empty",
                          },
                        ]}
                      >
                        <Input type="password" />
                      </Form.Item>

                      <Form.Item>
                        <div className="login_loginButton">
                          <Button htmlType="submit">{"Sign in"}</Button>
                        </div>
                      </Form.Item>
                    </div>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
          <div className="login_logo_container">
            <div className="login_logo" />
          </div>
        </div>
      </div>
    );
  };
}

export default connect(null, { login })(Login);
