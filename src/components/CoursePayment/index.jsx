import React from 'react'
import { PAYMENT_TYPE } from '../../constants/general';
import { formatCurrency, formatDate } from '../../utils/format';

const CoursePayment = ({name, paymentMethod, createdAt, course}) => {
  const paymentMethodName = PAYMENT_TYPE[paymentMethod];
  return (
    <div className="itemhistory">
      <div className="name">{name}</div>
      <div className="payment">{paymentMethodName}</div>
      <div className="date">{formatDate(createdAt)}</div>
      <div className="money">{formatCurrency(course?.price)}</div>
    </div>
  );
}

export default CoursePayment