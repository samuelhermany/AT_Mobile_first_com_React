import React from 'react';
import styles from './Carrosel.module.css';

export function Carrosel({ visibleIndex }) {
  const images = [
    'https://cdn.pixabay.com/photo/2022/10/23/13/43/canoe-7541311_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/05/17/13/38/lofoten-islands-8000196_1280.jpg',
    'https://cdn.pixabay.com/photo/2019/08/17/04/18/morning-4411421_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669_640.jpg',
    'https://cdn.pixabay.com/photo/2016/09/09/16/17/lake-1657426_640.jpg',
    'https://cdn.pixabay.com/photo/2020/02/11/10/24/lake-4839058_640.jpg',
    'https://cdn.pixabay.com/photo/2019/07/04/17/24/beach-4316959_640.jpg',
    'https://cdn.pixabay.com/photo/2017/06/05/19/10/hallstatt-2374936_640.jpg',
    'https://cdn.pixabay.com/photo/2016/08/18/02/07/landscape-1602016_640.jpg',
  ];

  return (
    <div className={styles.container}>
      {images.map((img, index) => (
        index < visibleIndex ? (
          <img key={index} src={img} alt={`Imagem ${index + 1}`} className={styles.img} />
        ) : null
      ))}
    </div>
  );
}
