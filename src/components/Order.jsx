import React from 'react';
import '@styles/Order.scss';
import Image from 'next/image';
import icon from '@icons/flechita';

const Order = () => {
  return (
    <div className="Order">
      <p>
        <span>03.25.21</span>
        <span>6 articles</span>
      </p>
      <p>$560.00</p>
      <Image src={icon} alt="arrow" />
    </div>
  );
};

export default Order;
