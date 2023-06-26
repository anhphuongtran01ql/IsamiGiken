import React from "react";
import "./contactUs.css";
import ImageCover from "../Header/imageCover";
import contact_mv from "../../assets/Images/contact/contact_mv.jpg";
import axios from "axios";

import { Button, Col, Form, Input, Row, notification } from "antd";

const infoHeader = {
  image: contact_mv,
  title: "Contact",
  subTitle: "お問い合わせ",
};

function ContactUs() {
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: `Send email ${type}`,
    });
  };

  const [form] = Form.useForm();
  const onFinish = async (values) => {
    // console.log("values: ", values);
    await axios
      .post("http://localhost:8080/contact-us", values)
      .then((res) => {
        openNotificationWithIcon("success");
        console.log("res", res);
      })
      .catch((err) => {
        openNotificationWithIcon("error");
        console.log("error", err);
      });
  };

  return (
    <>
      {contextHolder}
      <ImageCover infoHeader={infoHeader} />
      <section className="container contact-us__form">
        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{}}
          scrollToFirstError
        >
          <Row className="contact-us__row_container">
            <Col className="contact-us__col_container" span={24}>
              <Row className="contact-us__row-item__container">
                <Col
                  className="contact-us__col_label"
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 8 }}
                >
                  <span className="contact-us__span_required">必須</span>
                  <span className="contact-us__span_label">お名前 </span>
                </Col>
                <Col
                  className="contact-us__col_input"
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 16 }}
                >
                  <Form.Item
                    name="name"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input
                      className="contact-us__input"
                      placeholder="例： 山田　太郎"
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row className="contact-us__row-item__container">
                <Col
                  className="contact-us__col_label"
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 8 }}
                >
                  <span className="contact-us__span_required">必須</span>
                  <span className="contact-us__span_label">ご住所</span>
                </Col>
                <Col
                  className="contact-us__col_input"
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 16 }}
                >
                  <Row className="contact-us__row_zipCode">
                    <Col className="contact-us__col_zipCode" xs={24} sm={8}>
                      <Form.Item
                        name="zipCode"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <Input
                          className="contact-us__input contact-us__input_zipCode"
                          placeholder="〒 166-0002"
                        />
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
                          },
                        ]}
                      >
                        <Input
                          className="contact-us__input"
                          placeholder="例： 東京都杉並区高円寺北2-13-3"
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row className="contact-us__row-item__container">
                <Col
                  className="contact-us__col_label"
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 8 }}
                >
                  <span className="contact-us__span_required">必須</span>
                  <span className="contact-us__span_label">メールアドレス</span>
                </Col>
                <Col
                  className="contact-us__col_input"
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 16 }}
                >
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        type: "email",
                      },
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input
                      className="contact-us__input"
                      placeholder="例： yamada-t@example.com"
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row className="contact-us__row-item__container">
                <Col
                  className="contact-us__col_label"
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 8 }}
                >
                  <span className="contact-us__span_required">必須</span>
                  <span className="contact-us__span_label">電話番号</span>
                </Col>
                <Col
                  className="contact-us__col_input"
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 16 }}
                >
                  <Form.Item
                    name="phone"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input
                      className="contact-us__input"
                      placeholder="例：09000123456 ※ハイフン（-）不要"
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row className="contact-us__row-item__container">
                <Col
                  className="contact-us__col_label"
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 8 }}
                >
                  <span className="contact-us__span_required">必須</span>
                  <span className="contact-us__span_label">お問合わせ内容</span>
                </Col>
                <Col
                  className="contact-us__col_input"
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 16 }}
                >
                  <Form.Item
                    name="inquiryContent"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input.TextArea
                      rows={5}
                      showCount
                      className="contact-us__input textarea__input"
                      placeholder="例：屋根を修理してもらいたいです。"
                      style={{ backgroundColor: "#757575" }}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>

          <Form.Item style={{ display: "block", textAlign: "center" }}>
            <Button className="button__submit" type="primary" htmlType="submit">
              入力した内容を確認する
            </Button>
          </Form.Item>
        </Form>
      </section>
    </>
  );
}

export default ContactUs;
