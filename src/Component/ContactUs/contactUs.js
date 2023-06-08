import React from "react";
import "./contactUs.css";
import ImageCover from "../Header/imageCover";
import contact_mv from "../../assets/Images/contact/contact_mv.jpg";

import { Button, Form, Input } from "antd";

const formItemLayout = {
  labelCol: {
    sm: {
      span: 24,
    },
    md: {
      span: 8,
    },
  },
  wrapperCol: {
    sm: {
      span: 24,
    },
    md: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    sm: {
      span: 24,
      offset: 0,
    },
    md: {
      span: 16,
      offset: 0,
    },
  },
};

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
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={
              {
                // residence: ["zhejiang", "hangzhou", "xihu"],
                // prefix: "86",
              }
            }
            style={{
              maxWidth: "100%",
            }}
            scrollToFirstError
          >
            <Form.Item
              name="name"
              label="お名前"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="address"
              label="ご住所"
              rules={[
                {
                  required: true,
                  message: "Please input your address!",
                },
              ]}
            >
              <Input />
              <Input />
            </Form.Item>

            <Form.Item
              name="email"
              label="メールアドレス"
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
              <Input />
            </Form.Item>

            <Form.Item
              name="phone"
              label="電話番号"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="inquiryContent"
              label="
            お問合わせ内容"
              rules={[
                {
                  required: true,
                  message: "Please input inquiry content!",
                },
              ]}
            >
              <Input.TextArea showCount maxLength={100} />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
