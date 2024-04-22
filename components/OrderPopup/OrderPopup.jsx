"use client";
import { useState, useEffect } from "react";
import { Modal, Form, Input, Select, Button, Checkbox, Row, Col } from "antd";
import {
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import styles from "./OrderPopup.module.css";

const { Option } = Select;
const { TextArea } = Input;

const OrderPopup = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    isRobotChecked: false,
    isConsentChecked: false,
    email: "",
    city: "",
    quantity: "",
    description: "",
    selectedProducts: [],
  });

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    if (isFormValid) {
      // Возможная отправка данных
      console.log("Form data:", formData);
    }
    setIsModalVisible(false);
    clearForm();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    clearForm();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      selectedProducts: value,
    }));
  };

  function clearForm() {
    form.resetFields();
    setFormData({
      name: "",
      phone: "",
      isRobotChecked: false,
      isConsentChecked: false,
      email: "",
      city: "",
      quantity: "",
      description: "",
      selectedProducts: [],
    });
  }

  useEffect(() => {
    const isValid =
      (formData.name &&
        formData.phone &&
        formData.isRobotChecked &&
        formData.isConsentChecked) ||
      false;
    setIsFormValid(isValid);
  }, [formData]);

  return (
    <>
      <div className={styles.order__button} onClick={showModal} type="button">
        Заказать
      </div>
      <Modal
        title="ЗАЯВКА НА ПОСТАВКУ ПРОДУКЦИИ"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form layout="vertical" form={form}>
          <Form.Item
            label="Ваше имя"
            tooltip="Это обязательное поле"
            rules={[
              { required: true, message: "Пожалуйста, введите ваше имя" },
            ]}
          >
            <Input
              name="name"
              prefix={<UserOutlined />}
              placeholder="Введите ваше имя"
              onChange={handleInputChange}
              value={formData.name}
            />
          </Form.Item>
          <Form.Item
            label="Телефон"
            tooltip="Это обязательное поле"
            rules={[
              { required: true, message: "Пожалуйста, введите ваш телефон" },
            ]}
          >
            <Input
              prefix={<PhoneOutlined />}
              addonBefore="+7"
              style={{ width: "100%" }}
              placeholder="(XXXX)-XXX-XX-XX"
              name="phone"
              onChange={handleInputChange}
              value={formData.phone}
            />
          </Form.Item>
          <Form.Item label="E-mail">
            <Input
              prefix={<MailOutlined />}
              placeholder="Введите ваш e-mail"
              onChange={handleInputChange}
              name="email"
              value={formData.email}
            />
          </Form.Item>
          <Form.Item label="Ваш город">
            <Input
              prefix={<EnvironmentOutlined />}
              placeholder="Введите ваш город"
              onChange={handleInputChange}
              value={formData.city}
              name="city"
            />
          </Form.Item>
          <Form.Item label="Выберите продукт">
            <Select
              mode="multiple"
              allowClear
              placeholder="Выберите продукт"
              onChange={handleSelectChange}
              value={formData.selectedProducts}
            >
              <Option value="product1">Продукт 1</Option>
              <Option value="product2">Продукт 2</Option>
              {/* ... другие опции ... */}
            </Select>
          </Form.Item>
          <Form.Item label="Планируемый объем закупки">
            <Input
              placeholder="Укажите объем"
              onChange={handleInputChange}
              name="quantity"
              value={formData.quantity}
            />
          </Form.Item>
          <Form.Item label="Дополнительная информация">
            <TextArea
              placeholder="Любая дополнительная информация"
              name="description"
              onChange={handleInputChange}
              value={formData.description}
            />
          </Form.Item>
          <Form.Item>
            <Checkbox
              name="isRobotChecked"
              onChange={handleCheckboxChange}
              checked={formData.isRobotChecked}
            >
              Я не робот
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Checkbox
              name="isConsentChecked"
              onChange={handleCheckboxChange}
              checked={formData.isConsentChecked}
            >
              Отправляя данные с этой формы, вы даете согласие на обработку
              персональных данных
            </Checkbox>
          </Form.Item>
          <Row gutter={16}>
            <Col span={12}>
              <Button
                onClick={handleCancel}
                block
                className={styles.cancel__button}
              >
                Отмена
              </Button>
            </Col>
            <Col span={12}>
              <Button
                type="submit"
                onClick={handleOk}
                block
                disabled={!isFormValid}
                className={styles.submit__button}
              >
                Отправить
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default OrderPopup;
