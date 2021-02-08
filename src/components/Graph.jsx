import React from 'react';
import { useSelector } from 'react-redux';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Graph = ({ table }) => {
  return (
    <AreaChart
      width={700}
      height={400}
      data={table}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='date' dy={10} />
      <YAxis type='number' dx={5} />
      <Tooltip />
      <Area type='monotone' dataKey='date' stackId='1' stroke='#82ca4c' fill='#82ca4c' />
      <Area type='monotone' dataKey='price' stackId='1' stroke='#8884d8' fill='#8884d8' />
      <Area type='monotone' dataKey='company' stackId='1' stroke='#82ca9d' fill='#82ca9d' />
    </AreaChart>
  );
};

export default Graph;
