import React, {useEffect, useRef, useState} from 'react';
import Layout from '../components/Layout';
import MyTabs from '../components/MyTabs';
import recordTypeList from '../constants/recordTypeList';
import Charts from '../components/Charts';
import dayjs from 'dayjs';
import {useDateList} from '../hooks/useDateList';
import _ from 'lodash';
import {EChartOption} from 'echarts';
import styled from 'styled-components';

const P = styled.p`
  text-align: center;
  position: relative;
  top: 10px;
  font-weight: bold;
  font-size: 18px;
`;
const ChartsWrapper1 = styled.div`
  height: 40%;
  position: relative;
`;
const ChartsWrapper = styled.div`
  overflow-y: hidden;
  height: 40%;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }

  .charts {
    width: 430% !important;
  }
`;
const Component = () => {
  const [type, setType] = useState('-');
  const {dayList, typeList} = useDateList();
  const chartWrapper = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (chartWrapper.current) {
      chartWrapper.current.scrollLeft = chartWrapper.current.scrollWidth;
    }
  }, []);

  function chartData() {
    const array = [];
    for (let i = 0; i <= 29; i++) {
      const date = dayjs().subtract(29, 'day').add(i, 'day').format('YYYY-M-D');
      const found = _.find(dayList(type), {title: date});
      array.push({date, total: found ? found.total : 0});
    }
    return array;
  }

  function chartOptions() {
    const date = chartData().map(item => item.date);
    const total = chartData().map(item => item.total);
    return {
      grid: {left: 16, right: 16, height: '45%', top: 25},
      xAxis: {
        type: 'category',
        data: date,
        axisTick: {alignWithLabel: true},
        axisLine: {lineStyle: {color: 'black'}},
        axisLabel: {
          show: true,
          formatter: function (value: string) {
            return value.substr(5);
          }
        }
      },
      yAxis: {
        show: false
      },
      series: [{
        type: 'line',
        data: total,
        symbol: 'circle',
        symbolSize: 10,
        itemStyle: {
          borderWidth: 1,
          color: '#666'
        },
        label: {
          show: true, //开启显示
          position: [0, -20], //在上方显示
          fontFamily: 'Arial',
          textStyle: { //数值样式
            color: '6E7783',
            fontSize: 16
          }
        }
      }],
    };
  }

  function roundChartOptions() {
    let data = typeList(type).map(item => ({value: item.total, name: item.tag}));
    if (data.length === 0) {data = [{value: 0, name: '无'}];}
    return {
      color: [
        '#6E7783',
        '#fac858',
        '#fc8452',
        '#5470c6',
        '#ee6666',
        '#73c0de',
        '#3ba272',
        '#91cc75',
        '#5470c6',
        '#ea7ccc'
      ],
      gradientColor: ['#f6efa6',
        ' #d88273',
        '#bf444c'],
      title: {
        left: 'center',
        padding: 16,
        textStyle: {
          // color: '#356ca7'
        }
      },
      tooltip: {
        trigger: 'item'
      },
      series: [
        {
          center: ['50%', '40%'],
          name: '',
          type: 'pie',
          radius: '45%',
          data: data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0，0.5)'
            }
          }
        }
      ]
    };
  }

  return (
    <Layout>
      <MyTabs dataSource={recordTypeList} type={type} setType={setType}/>
      <P>分类统计</P>
      <ChartsWrapper1>
        <Charts options={roundChartOptions() as EChartOption}/>
      </ChartsWrapper1>
      <P>日趋势</P>
      <ChartsWrapper ref={chartWrapper}>
        <Charts options={chartOptions() as EChartOption} className='charts'/>
      </ChartsWrapper>
    </Layout>
  );
};
export default Component;


