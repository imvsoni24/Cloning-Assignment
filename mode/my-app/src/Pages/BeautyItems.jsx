import styled, { css } from "styled-components";
import { useEffect, useState } from "react";
import styles from "./Pagination.module.css";
import { Link } from "react-router-dom";
const Wrapper = styled.div`
  display: grid;
  
  grid-template-columns: repeat(4, 1fr);
  ${(props) =>props.grid2 === true &&    css`
      grid-template-columns: 400px 400px;
      gap: 40px;
    `};
  ${(props) =>
    props.grid3 === true &&    css`
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    `}
  gap: 4px;
`;
const Button = styled.button`
  border: 1px solid black;
  margin: 0 auto;
  width: 85%;
  position: absolute;
  font-weight: bold;
  top: 56%;
  bottom: 34%;
  display: none;
  background: rgba(255, 255, 255, 0.6) none repeat scroll 0% 0% / auto
    padding-box border-box;
  z-index: 99;
  margin-left:-120px;
`;
const Container = styled.div`
  border: 1px solid #f5f5f5;
  position: relative;
  padding: 0 20px;
  overflow: hidden;
  height: 370px;
  &:hover ${Button} {
    display: block;
  }
`;

const SlideItem = styled.img`
  height: 100%;
  width: 90%;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin: auto;
`;
const HeartDIv = styled.div`
  position: absolute;
  left: 88%;
  bottom: 93%;
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  text-align: center;
  margin-top: -40px;

  & span {
    font-size: 12px;
    color: gray;
  }
  & h6 {
    font-size: 13px;
    font-weight: bold;
    margin: 0;
  }
`;
const Header = styled.h1`
  font-size: 26px;

  font-family: "Open Sans", sans-serif;
`;
const SubHead = styled.p`

  font-size: 14px;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  text-align: left;
`;
const HeartImg = styled.img``;

const ProductItem = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [grid2, setgrid2] = useState(false);
  const [grid3, setgrid3] = useState(false);
  useEffect(() => {
    getData();
    // console.log("data recieved")
    // console.log(page)
  }, [page, grid2]);
  const getData=async()=>{
    let res = await fetch(`http://localhost:3000/beauty?_page=${page}`)
    res = await res.json()
    setData(res)
   }
  function handleSort(e) {
    // console.log("hello")
    // console.log(e.target.value)
    if (e.target.value === "highest_price") {
      // console.log(items[0].price)
      data.sort((a, b) => b.rate - a.rate);
      setData([...data]);
      // console.log("hello")
    } else if (e.target.value === "lowest_price") {
      // console.log(items[0].price)
      data.sort((a, b) => a.rate - b.rate);
      setData([...data]);
      // console.log("hello")
    }
  }
  return (

    <div>
      <div>
        <Header style={{marginTop:"10px"}}>Designer Beauty</Header>
        <SubHead style={{marginTop:"10px"}}>
          Shop designer beauty with price comparison across 500+ stores in one
          place. Discover the latest designer beauty at ModeSens.
        </SubHead>
      </div>
      <div className={styles.pagdiv}>
        <div className={styles.paginationWrap}>
          <div className={styles.pagination}>
            <span onClick={() => setPage(1)}>1</span>
            <span onClick={() => setPage(2)}>2</span>
            <span onClick={() => setPage(3)}>3</span>
            <div className={styles.paginationDot}>
              <c>.</c>
              <c>.</c>
              <c>.</c>
            </div>

            <div className={styles.imgTag}>
              <img src="https://img.icons8.com/material-outlined/14/000000/more-than.png"  onClick={() => setPage(page + 1)}  alt=""  />
            </div>
          </div>
        </div>
        <div className={styles.sortdiv}>
          <img
            className={styles.viewsort}
            onClick={() => {
              setgrid2(true);
              setgrid3(false);
              // console.log(grid2)
            }}
            src="https://cdn.modesens.com/static/img/20210908column2.svg"
            alt=""
          />
          <img
            className={styles.viewsort}
            onClick={() => {
              setgrid3(true);
              setgrid2(false);
              // console.log(grid2)
            }}
            src="https://cdn.modesens.com/static/img/20210908column3.svg"
            alt=""
          />
          <img className={styles.viewsort}  onClick={() => { setgrid3(false);  setgrid2(false);   // console.log(grid2)
            }}
            src="https://cdn.modesens.com/static/img/20210908column4_active.svg"
            alt=""
          />
          <div>
            <select className="options" name="" id="" onChange={handleSort}>
              <option value="best_sellers">Best Sellers</option>
              <option value="new_arrival">New Arrivals</option>
              <option value="most_liked">Most Liked</option>
              <option value="highest_price">Highest Price</option>
              <option value="lowest_price">Lowest Price</option>
              <option value="new_sales">New Sales</option>
              <option value="largest_discount">Largest Discount Amount</option>
              <option value="largest_discount_per">
                Largest Discount Percentage
              </option>
            </select>
          </div>
        </div>
      </div>
      <Wrapper grid2={grid2} grid3={grid3}>
        {data.map((e) => {
          return (
            <Container 
            >
               

                <HeartDIv>
                  <HeartImg
                    src="https://cdn.modesens.com/static/img/20210601heart.svg"
                    alt=""
                  />
                </HeartDIv>
                <div
                  style={{
                    display: "flex",
                    border: "none",
                    justifyContent: "center",
                    padding: "20px 8px",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "240px",
                      overflow: "hidden",
                    }}
                  >
                    <SlideItem src={e.src} />
                  </div>
                </div>
                <div key={e.id}  style={{ display: "flex", justifyContent: "center" }}>
                <Link to={`/beauty/${e.id}`}><Button>View Details</Button></Link>
                </div>
                <TextDiv>
                  <h5
                    style={{
                      color: "black",
                      fontSize: "17px",
                      textAlign: "center",
                      fontWeight: "bold",
                      marginTop:"10px"
                    }}
                  >
                    {e.title}
                  </h5>
                  <p
                    style={{
                      fontSize: "15px",
                      textAlign: "center",
                      color: "gray",
                      marginTop:"5px",
                      lineHeight:"normal"
                    }}
                  >
                    {e.sub}
                  </p>
                  <h6
                    style={{
                      fontSize: "15px",
                      color: "black",
                      marginTop:"5px"
                    }}
                  >
                    ${e.rate}-${e.rate*2}
                  </h6>
                  <span style={{ color: "gray",marginTop:"5px" }}>
                    {e.st}-store
                  </span>
                </TextDiv> 
            </Container>
          );
        })}
      </Wrapper>
    </div>
  );
};

export default ProductItem;
