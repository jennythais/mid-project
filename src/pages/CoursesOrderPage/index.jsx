import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormOrder from "./FormOrder";
import InfoOrder from "./InfoOrder";
import PaymentOrder from "./PaymentOrder";
import useMutation from "../../hooks/useMutation";
import { courseService } from "../../services/courseService";
import { useEffect } from "react";
import { ROLE } from "../../constants/role";
import { formatCurrency } from "../../utils/format";
import { useAuthContext } from "../../context/AuthContext";
import useForm from "../../hooks/useForm";
import { regrexRule, requireRule } from "../../utils/validate";
import { useState } from "react";
import Button from "../../components/Button";
import { orderService } from "../../services/orderService";
import PATHS from "../../constants/paths";
import { message } from "antd";
const CoursesOrderPage = () => {
  //InfoOrder
  const { courseSlug } = useParams();
  const {
    profile,
    courseInfo,
    handleGetProfileCourse,
    handleGetProfilePayment,
  } = useAuthContext();
  const isAlreadyOrder = courseInfo?.some(
    (item) => item?.course?.slug === courseSlug
  );
  const { data: courseDetailData, execute: executeCourseDetail } = useMutation(
    courseService.getCourseSlug
  );
  useEffect(() => {
    if (courseSlug) executeCourseDetail?.(courseSlug, {});
  }, [courseSlug]);

  //FormOrder
  const {
    firstName: profileName,
    email: profileEmail,
    phone: profilePhone,
  } = profile || {};
  const { form, register, validate, setForm } = useForm(
    {
      name: "",
      email: "",
      phone: "",
      type: "",
    },
    {
      name: [requireRule("Please enter name")],
      email: [
        requireRule("Please enter email "),
        regrexRule("email", "Please input correct format"),
      ],
      phone: [
        requireRule("Please enter phone "),
        regrexRule("phone", "Please input correct format"),
      ],
      type: [requireRule("Please choose method to study")],
    }
  );

  useEffect(() => {
    if (isAlreadyOrder && courseInfo?.length > 0) {
      const orderedCourse = courseInfo?.find(
        (item) => item.course.slug === courseSlug
      );
      setForm({
        name: orderedCourse.name || "",
        email: orderedCourse.email || "",
        phone: orderedCourse.phone || "",
        type: orderedCourse.type || "",
      });
      setPaymentMethod(orderedCourse.paymentMethod);
    } else {
      setForm({
        name: profileName || "",
        email: profileEmail || "",
        phone: profilePhone || "",
        type: "",
      });
    }
  }, [profileName, profileEmail, profilePhone, isAlreadyOrder, courseInfo]);

  //PaymentOrder
  const [paymentMethod, setPaymentMethod] = useState("");
  const handlePaymentMethodChange = (payment) => {
    setPaymentMethod(payment);
  };

  //Modify
  const { teams, price, tags } = courseDetailData || {};
  // Child props
  const InfoOrderProps = {
    ...courseDetailData,
    teacherInfo: teams?.find((item) => item.tags.includes(ROLE.teacher)) || {},
    price: formatCurrency(price),
  };

  //Handle _onOrder
  const navigate = useNavigate();
  // Handle when user click order this course
  const { loading: orderLoading, execute: orderCourse } = useMutation(
    orderService.orderCourse
  );
  const _onOrder = () => {
    const profileError = validate();

    if (Object.keys(profileError).length > 0) {
      console.log("Profile form validate failed", profileError);
    } else {
      if (paymentMethod) {
        // setup payload
        const payload = {
          name: form?.name,
          phone: form?.phone,
          course: courseDetailData?.id,
          type: form.type,
          paymentMethod,
        };
        // call api order
        orderCourse(payload, {
          onSuccess: async () => {
            message.success("Đăng ký thành công!");
            await handleGetProfileCourse();
            await handleGetProfilePayment();
            navigate(PATHS.PROFILE.MY_COURSE);
          },
          onFail: () => {
            message.error("Đăng ký thất bại!");
          },
        });
      } else {
        message.error("Vui lòng chọn hình thức thanh toán");
      }
    }
  };

  return (
    <main className="mainwrapper --ptop">
      <section className="sccourseorder">
        <div className="container small">
          <InfoOrder {...InfoOrderProps} />
          <FormOrder
            register={register}
            types={tags}
            disabled={isAlreadyOrder}
          />
          <PaymentOrder
            handleChange={handlePaymentMethodChange}
            selectedPayment={paymentMethod}
            disabled={isAlreadyOrder}
          />

          <Button
            style={{ width: "100%" }}
            onClick={_onOrder}
            loading={orderLoading}
            disabled={isAlreadyOrder}
          >
            <span>{isAlreadyOrder ? "Đã đăng ký" : "Đăng ký khoá học"}</span>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default CoursesOrderPage;
