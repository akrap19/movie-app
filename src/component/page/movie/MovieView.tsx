import React from "react";
import { Input, Form, Row, Col, Button, Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

import "../../../asset/style/movieView.scss";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";

function getBase64(img: any, callback: any) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file: File) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

class MovieView extends React.Component {
  componentDidMount() {}

  state = {
    imageUrl: "",
    loading: false,
  };

  handleChange = (info: any) => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl: string) =>
        this.setState({
          imageUrl,
          loading: false,
        })
      );
    }
  };

  render = () => {
    const uploadButton = (
      <div>
        {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div className="ant-upload-text">Upload</div>
      </div>
    );

    const onFinish = (values: any) => {
      console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log("Failed:", errorInfo);
    };

    const { imageUrl } = this.state;
    return (
      <div className="movie_view">
        <div className="movie_view_container">
          <div className="movie_view_form_container">
            <div className="movie_view_form">
              <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                layout="vertical"
                className="movie_view_movieForm"
              >
                <div className="movie_view_title">
                  <p>Create a new movie</p>
                </div>
                <Row>
                  <Col md={12} sm={24}>
                    <div className="movie_view_movieForm">
                      <span className="input_tag">{"Title*"}</span>
                      <Form.Item
                        name="title"
                        rules={[
                          {
                            required: true,
                            message: "Title can not be empty",
                          },
                        ]}
                      >
                        {<Input />}
                      </Form.Item>
                      <span className="input_tag">{"Publication year"}</span>
                      <Form.Item
                        name="publicationYear"
                        rules={[
                          {
                            pattern: new RegExp("^[12][0-9]{3}$"),
                            message: "This is not a year",
                          },
                        ]}
                      >
                        {<Input />}
                      </Form.Item>
                      <span className="input_tag">{"Cover image*"}</span>
                      <Form.Item
                        name="title"
                        rules={[
                          {
                            required: true,
                            message: "Cover image can not be empty",
                          },
                        ]}
                      >
                        {
                          <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            beforeUpload={beforeUpload}
                            onChange={this.handleChange}
                          >
                            {imageUrl ? (
                              <img
                                src={imageUrl}
                                alt="avatar"
                                style={{ width: "100%" }}
                              />
                            ) : (
                              uploadButton
                            )}
                          </Upload>
                        }
                      </Form.Item>
                      <Form.Item>
                        <div className="movie_view_button_container">
                          <Link to="/">
                            <Button className="btn-cancel">{"Cancel"}</Button>
                          </Link>
                          <Button className="btn_create" htmlType="submit">
                            {"Create"}
                          </Button>
                        </div>
                      </Form.Item>
                    </div>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
          <div className="movie_view_logo_container">
            <div className="movie_view_logo" />
          </div>
        </div>
      </div>
    );
  };
}

export default MovieView;
