import { useState } from "react";
import { NextPage } from "next";
import Link         from "next/link";
import Image        from "next/image";
import Head         from "next/head";

import { AuthService }                  from "~/services";
import { getErrorMessage }              from "~/lib/types/service";
import { Button, Input as FormikInput } from "~/components/ui";

import { object, string }                         from "yup";
import { Field, Form, FormikProvider, useFormik } from "formik";
import { Col, Row }                               from "antd";
import { CheckOutlined }                          from "@ant-design/icons";

const ChangePassword: NextPage = () => {
  const [hasChangedPasswordSuccessfully, setHasChangedPasswordSuccessfully] =
    useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validationSchema = object({
    currentPassword: string().required("Password is required"),
    newPassword: string().required("New password is required"),
    newPasswordConfirmation: string()
      .required("Please confirm your new password.")
      .test("passwords-should-match", "Passwords must match", function (value) {
        return this.parent.newPassword === value;
      }),
  });

  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      newPasswordConfirmation: "",
    },
    validationSchema,
    onSubmit: async ({
      currentPassword,
      newPassword,
      newPasswordConfirmation,
    }) => {
      try {
        console.log('submitting')
        const res = await AuthService.requestPasswordChange(currentPassword, newPassword, newPasswordConfirmation);
        console.log(res)
        setHasChangedPasswordSuccessfully(true);
      } catch (error) {
        setErrorMessage(getErrorMessage(error));
      }
    },
  });

  return (
    <>
      <Head>
        <title>Change password</title>
      </Head>

      <div
        className="h-screen/85 md:bg-lightgray sm:bg-white md:px-16 md:py-12 sm:p-0">
        {hasChangedPasswordSuccessfully ? (
          <Row>
            <Col
              className="bg-gradient-to-b from-primary via-primary to-lightviolet hidden md:flex h-screen justify-center items-center"
              xs={0}
              sm={12}
            >
              <Image
                priority
                src="/images/password-recovery-icon.png"
                className=""
                width={527}
                height={366}
                alt="A drawing of a girl with red hair, red shirt, black jean standing on a laptop. The laptop has security notification."
              />
            </Col>
            <Col
              className="bg-white flex h-screen justify-center items-start"
              sm={12}
            >
              <div className="md:mt-40 sm:mt-8 mx-4">
                <CheckOutlined
                  className="text-5xl text-green-500 flex items-center justify-center"/>
                <h1
                  className="pt-6 pb-4 text-4xl text-center font-medium leading-12 tracking-wide">
                  Mật khẩu của bạn đã được thay đổi!
                </h1>
                <div className="mt-6 flex items-center justify-center">
                  <Link href="/login">
                    <a
                      className="px-3 pt-1 py-2 rounded bg-primary text-white hover:bg-violet hover:text-white focus:bg-violet">
                      Đăng nhập
                    </a>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col
              className="bg-primary hidden md:flex h-screen/75 justify-center items-center"
              xs={0}
              sm={12}
            >
              <Image
                priority
                src="/images/new-password-icon.png"
                className=""
                width={527}
                height={366}
                alt="A drawing of a girl with red hair, blue shirt, black jean standing on a laptop. The laptop has security notification."
              />
            </Col>
            <Col
              className="bg-white flex h-screen/75 justify-center items-start"
              sm={12}
            >
              <div className="md:mt-40 sm:mt-8 w-96 mx-4">
                <h1 className="pt-1 pb-4 text-4xl font-medium tracking-wide">
                  Thay đổi mật khẩu
                </h1>
                <p
                  className="font-normal text-base leading-7 max-w-6xl mx-auto">
                  Hãy nhập mật khẩu mới cho tài khoản của bạn
                </p>
                <FormikProvider value={formik}>
                  <Form>
                    {errorMessage && (
                      <div
                        className="mt-4 text-red-500 flex items-center justify-center">
                        {errorMessage}
                      </div>
                    )}

                    <Field
                      className="mt-6 h-12 border border-primary hover:border-violet-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      name="currentPassword"
                      type="password"
                      placeholder="Nhập mật khẩu hiện tại"
                      as={FormikInput}
                    />
                    <Field
                      className="mt-6 h-12 border border-primary hover:border-violet-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      name="newPassword"
                      type="password"
                      placeholder="Nhập mật khẩu mới"
                      as={FormikInput}
                    />
                    <Field
                      className="mt-6 h-12 border border-primary hover:border-violet-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      name="newPasswordConfirmation"
                      type="password"
                      placeholder="Nhập lại mật khẩu mới"
                      as={FormikInput}
                    />
                    <div className="mt-6 flex items-center justify-center">
                      {formik.isSubmitting ? (
                        <div className=" flex justify-center items-center">
                          <div
                            className="animate-spin rounded-full h-4 w-4 border-b-2 border-black"/>
                        </div>
                      ) : (
                        <Button
                          content="Thay đổi mật khẩu"
                          type="submit"
                          fillType="filled"
                          size="medium"
                          className={`w-full rounded-lg ${
                            (!formik.isValid || !formik.dirty)
                              ? '!bg-primary-800/60'
                              : ''
                          } text-[19px] md:text-sub-heading`}
                        />
                      )}
                    </div>
                  </Form>
                </FormikProvider>
              </div>
            </Col>
          </Row>
        )}
      </div>
    </>
  );
};

export default ChangePassword;
