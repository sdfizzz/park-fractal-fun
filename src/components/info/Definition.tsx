import React from 'react';
import { Mention, Paragraph, ParagraphTitle } from './textStyles';
import { Svg1, Svg2, Svg3, Svg4 } from './svg';

const Definition = () => (
  <>
    <ParagraphTitle>Определение</ParagraphTitle>
    <Paragraph>
      Канторово множество&nbsp;&mdash; пересечение последовательности замкнутых множеств,
      образованных из&nbsp;последовательного отрезания средней трети у&nbsp;оставшегося отрезка.
    </Paragraph>
    <Paragraph>Возьмем единичный отрезок</Paragraph>
    <Svg1 />
    <Paragraph>Удалим среднюю треть без граничных точек</Paragraph>
    <Svg2 />
    <Paragraph>Продолжаем бесконечное количество раз</Paragraph>
    <Svg3 />
    <Paragraph>
      Получаем последовательность замкнутых множеств. Из них формируем пересечение.
    </Paragraph>
    <Svg4 />
    <Paragraph>
      Как это часто бывает, впервые этот объект появился в&nbsp;работе вовсе не&nbsp;Георга Кантора,
      а&nbsp;математика из&nbsp;Оксфорда Генри Смита в&nbsp;1875&nbsp;году.
    </Paragraph>
    <Mention>Сам Кантор для описания не&nbsp;использовал отрезки</Mention>
    <Paragraph>
      Рассмотрим точки на&nbsp;отрезке от&nbsp;0&nbsp;до&nbsp;1&nbsp;в троичной системе счисления.
      Все числа в&nbsp;этой системе записываются &laquo;десятичной&raquo; дробью, в&nbsp;записи
      которой присутствуют только 0, 1&nbsp;и&nbsp;2. Например, 0.1 равно ⅓ в&nbsp;десятичной
      и&nbsp;так далее. Канторовым множеством называется множество чисел, в&nbsp;записи которых
      фигурируют только 0&nbsp;и&nbsp;2.
    </Paragraph>
    <Paragraph>
      Это почти то же самое, что делал Генри Смит, только в&nbsp;его конструкции m должно быть равно
      трем и&nbsp;на&nbsp;каждом шаге следует выбрасывать не последний отрезок,&nbsp;а&nbsp;тот, что
      посередине.
    </Paragraph>
  </>
);

export default Definition;
