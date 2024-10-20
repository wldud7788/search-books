import fetchOneBook from "@/lib/fetch-one-book";
import style from "@/styles/book-detail.module.css";
import { params } from "@/utils/params";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";

export const getStaticPaths = () => {
  return {
    paths: params,
    fallback: "blocking",
  };
};
export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params!.id;
  const book = await fetchOneBook(Number(id));
  return {
    props: { book },
  };
};
export default function Page({
  book,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!book) {
    return "문제 발생";
  }
  const { title, subTitle, description, author, publisher, coverImgUrl } = book;
  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
      >
        <img src={coverImgUrl} alt="" />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.autor}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </div>
  );
}
