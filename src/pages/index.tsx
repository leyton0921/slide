import React from 'react';
import Slider from 'react-slick';
import styles from '../styles/ProductSlider.module.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Container from '@/components/ui/conatinerSlide/Container';
import Image from '@/components/ui/img/img';

function NextArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.customNextArrow}`}
      onClick={onClick}
      style={{ ...style }}
    />
  );
}

function PrevArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.customPrevArrow}`}
      onClick={onClick}
      style={{ ...style }}
    />
  );
}

export default function Home() {
  const products = [
    {
      id: 1,
      name: 'Top tirantes detalle lazo animal print',
      price: '69,900 COP',
      image: 'https://static.bershka.net/4/photos2/2024/V/0/1/p/0780/187/600/0780187600_2_4_0.jpg?imwidth=480&ts=1709639795034'
    },
    {
      id: 2,
      name: 'Vestido largo tirantes drapeado',
      price: '179,900 COP',
      image: 'https://static.bershka.net/assets/public/33d1/1093/14f7431bb9be/1c3eeecd9631/07591169712-a4o/07591169712-a4o.jpg?ts=1720533269885&w=480',
    },
    {
      id: 3,
      name: 'Camiseta sin mangas rib',
      price: '39,900 COP',
      image: 'https://static.bershka.net/4/photos2/2024/I/0/1/p/3957/187/800//01/3957187800_2_4_4.jpg?t=1707389405335',
    },
    {
      id: 4,
      name: 'Gorra',
      price: '199,900 COP',
      image: 'https://static.bershka.net/assets/public/11a3/966d/f26247e0becc/b84cf58ccbc6/05009335428-a4o/05009335428-a4o.jpg?ts=1716478011039&w=480',
    },
      {
      id: 5,
      name: 'Bolso',
      price: '199,900 COP',
      image: 'https://static.bershka.net/assets/public/806d/c9ae/2bb84975a954/dbd29480b55e/09035626700-a4o/09035626700-a4o.jpg?ts=1723476217719&w=480',
    },
      {
      id: 6,
      name: 'Pinzas',
      price: '199,900 COP',
      image: 'https://static.bershka.net/assets/public/7342/4c6c/55e84d27ab30/f26f1de4c262/09557023250-a4o/09557023250-a4o.jpg?ts=1723802865458&w=480',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
      <Container className={styles.container}>
            <Slider {...settings}>
                {products.map(product => (
                    <Container key={product.id} className={styles.card}>
                        <Container className={styles.imageWrapper}>
                            <Image src={product.image} alt={product.name} />
                        </Container>
                        <h2 className={styles.name}>{product.name}</h2>
                        <p className={styles.price}>{product.price}</p>
                    </Container>
                ))}
            </Slider>
      </Container>
  );
}

//npm i
//npm install react-slick slick-carousel
