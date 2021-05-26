import styled from 'styled-components';

const Section = styled.section`
  padding: 70px 70px 140px;
`;

const Article = styled.article`
  width: 750px;
`;

const Title = styled.h1`
  font-family: 'Golos DemiBold', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 80px;

  margin: 50px 0;
`;

const ParagraphTitle = styled.h2`
  font-family: 'Golos DemiBold', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 37px;
  line-height: 40px;
  margin-top: 50px;
`;

const Paragraph = styled.p`
  font-family: 'Golos Regular', sans-serif, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 35px;
`;

const Mention = styled.p`
  font-family: 'Merriweather Italic', serif;
  font-style: italic;
  font-weight: normal;
  font-size: 28px;
  line-height: 30px;

  &:before {
    content: '';
    border-left: 1px solid currentColor;
    margin-right: 15px;
  }
`;

const OrderedList = styled.ol`
  padding: 0;
  margin: 0;
`;

const Explanation = styled.p`
  font-family: 'Golos Regular', serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.5px;
  opacity: 0.5;
`;

const TextBlock = styled.div`
  font-family: 'Golos Regular', serif;
  background: #333333;
  box-shadow: 0 20px 100px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  padding: 30px;

  ${Paragraph} {
    font-family: 'Golos Regular', serif;
    font-size: 16px;
    line-height: 25px;
    margin-bottom: 10px;
  }

  ${OrderedList} {
    list-style: none;

    > li {
      position: relative;

      h3 {
        font-size: 1.8em;
        font-family: 'Golos Regular', serif;
        font-weight: 400;
      }

      :not(:first-child) {
        margin-top: 80px;
      }
    }
  }
`;

const Image = styled.img``;

const WhiteLink = styled.a`
  color: #fff;
`;

export {
  Section,
  Article,
  Title,
  Paragraph,
  ParagraphTitle,
  Image,
  TextBlock,
  Mention,
  Explanation,
  OrderedList,
  WhiteLink,
};
