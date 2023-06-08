import React from "react";
import "./contactUs.css";
import ImageCover from "../Header/imageCover";
import contact_mv from "../../assets/Images/contact/contact_mv.jpg";

import { Button, Col, Form, Input, Row } from "antd";

const infoHeader = {
  image: contact_mv,
  title: "Contact",
  subTitle: "お問い合わせ",
};

function ContactUs() {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <>
      <div className="contact-us__container">
        <ImageCover infoHeader={infoHeader} />
        <div className="contact-us__form">
          <Form
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{}}
            style={{
              maxWidth: "100%",
            }}
            scrollToFirstError
          >
            <Row className="contact-us__row_container">
              <Col className="contact-us__col_container" span={24}>
                <Row className="contact-us__row-item__container">
                  <Col
                    className="contact-us__col_label"
                    sm={{ span: 24 }}
                    md={{ span: 8 }}
                  >
                    <span className="contact-us__span_required">必須</span>
                    <span className="contact-us__span_label">お名前 </span>
                  </Col>
                  <Col
                    className="contact-us__col_input"
                    sm={{ span: 24 }}
                    md={{ span: 16 }}
                  >
                    <Form.Item
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: "Please input your name!",
                        },
                      ]}
                    >
                      <Input className="contact-us__input" />
                    </Form.Item>
                  </Col>
                </Row>

                <Row className="contact-us__row-item__container">
                  <Col
                    className="contact-us__col_label"
                    sm={{ span: 24 }}
                    md={{ span: 8 }}
                  >
                    <span
                      className="contact-us__span_required"
                      style={{ backgroundColor: "red" }}
                    >
                      必須
                    </span>
                    <span className="contact-us__span_label">ご住所</span>
                  </Col>
                  <Col
                    className="contact-us__col_input"
                    sm={{ span: 24 }}
                    md={{ span: 16 }}
                  >
                    <Row className="contact-us__row_zipCode">
                      <Col className="contact-us__col_zipCode" span={8}>
                        <Form.Item
                          name="zipCode"
                          rules={[
                            {
                              required: true,
                              message: "Please input your zipCode!",
                            },
                          ]}
                        >
                          <Input className="contact-us__input contact-us__input_zipCode" />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row className="contact-us__row_address">
                      <Col className="contact-us__col_address" span={24}>
                        <Form.Item
                          name="address"
                          rules={[
                            {
                              required: true,
                              message: "Please input your address!",
                            },
                          ]}
                        >
                          <Input className="contact-us__input" />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row className="contact-us__row-item__container">
                  <Col
                    className="contact-us__col_label"
                    sm={{ span: 24 }}
                    md={{ span: 8 }}
                  >
                    <span
                      className="contact-us__span_required"
                      style={{ backgroundColor: "red" }}
                    >
                      必須
                    </span>
                    <span className="contact-us__span_label">
                      メールアドレス
                    </span>
                  </Col>
                  <Col
                    className="contact-us__col_input"
                    sm={{ span: 24 }}
                    md={{ span: 16 }}
                  >
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          type: "email",
                          message: "The input is not valid email!",
                        },
                        {
                          required: true,
                          message: "Please input your email!",
                        },
                      ]}
                    >
                      <Input className="contact-us__input" />
                    </Form.Item>
                  </Col>
                </Row>

                <Row className="contact-us__row-item__container">
                  <Col
                    className="contact-us__col_label"
                    sm={{ span: 24 }}
                    md={{ span: 8 }}
                  >
                    <span
                      className="contact-us__span_required"
                      style={{ backgroundColor: "red" }}
                    >
                      必須
                    </span>
                    <span className="contact-us__span_label">電話番号</span>
                  </Col>
                  <Col
                    className="contact-us__col_input"
                    sm={{ span: 24 }}
                    md={{ span: 16 }}
                  >
                    <Form.Item
                      name="phone"
                      rules={[
                        {
                          required: true,
                          message: "Please input your phone number!",
                        },
                      ]}
                    >
                      <Input className="contact-us__input" />
                    </Form.Item>
                  </Col>
                </Row>

                <Row className="contact-us__row-item__container">
                  <Col
                    className="contact-us__col_label"
                    sm={{ span: 24 }}
                    md={{ span: 8 }}
                  >
                    <span
                      className="contact-us__span_required"
                      style={{ backgroundColor: "red" }}
                    >
                      必須
                    </span>
                    <span className="contact-us__span_label">
                      お問合わせ内容
                    </span>
                  </Col>
                  <Col
                    className="contact-us__col_input"
                    sm={{ span: 24 }}
                    md={{ span: 16 }}
                  >
                    <Form.Item
                      name="inquiryContent"
                      rules={[
                        {
                          required: true,
                          message: "Please input inquiry content!",
                        },
                      ]}
                    >
                      <Input.TextArea
                        showCount
                        maxLength={100}
                        className="contact-us__input"
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="contact-us__row-button__container">
              <Col
                className="contact-us__col-button__container"
                style={{ display: "flex", justifyContent: "center" }}
                span={24}
              >
                <Form.Item>
                  <Button
                    className="contact-us__button-submit"
                    type="primary"
                    htmlType="submit"
                  >
                    <p className="contact-us__text">入力した内容を確認する</p>
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
