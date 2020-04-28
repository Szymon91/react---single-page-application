import React from 'react';
import Article from "../components/Article";

const articles = [
    {
        id: 1,
        title: "Tytuł artykułu 1 ",
        author: "Jan Kowalski",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consequat malesuada fringilla. Nunc id dui convallis, aliquet ante ut, iaculis odio. Aliquam eget bibendum mi. Etiam faucibus feugiat porttitor. Etiam in lobortis ex. Cras neque augue, ultricies quis dictum at, varius in ex. Duis auctor nulla id placerat laoreet. Nam posuere ligula ut magna pharetra, id pretium augue accumsan. Nunc nec nisi bibendum, tincidunt ante et, rhoncus neque. Integer gravida blandit magna eget pretium."
    },
    {
        id: 2,
        title: "Tytuł artykułu 2",
        author: "Jan Kowalski",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consequat malesuada fringilla. Nunc id dui convallis, aliquet ante ut, iaculis odio. Aliquam eget bibendum mi. Etiam faucibus feugiat porttitor. Etiam in lobortis ex. Cras neque augue, ultricies quis dictum at, varius in ex. Duis auctor nulla id placerat laoreet. Nam posuere ligula ut magna pharetra, id pretium augue accumsan. Nunc nec nisi bibendum, tincidunt ante et, rhoncus neque. Integer gravida blandit magna eget pretium."
    },
    {
        id: 3,
        title: "Tytuł artykułu 3",
        author: "Jan Kowalski",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consequat malesuada fringilla. Nunc id dui convallis, aliquet ante ut, iaculis odio. Aliquam eget bibendum mi. Etiam faucibus feugiat porttitor. Etiam in lobortis ex. Cras neque augue, ultricies quis dictum at, varius in ex. Duis auctor nulla id placerat laoreet. Nam posuere ligula ut magna pharetra, id pretium augue accumsan. Nunc nec nisi bibendum, tincidunt ante et, rhoncus neque. Integer gravida blandit magna eget pretium."
    }
]

const HomePage = () => {

    const artList = articles.map(article => (
        <Article key={article.id} {...article} />
    ))
    return ( 
        <div className="home">
            {artList}
        </div>
     );
}
 
export default HomePage;