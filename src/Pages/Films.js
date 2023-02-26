import React from "react";
import { Slider } from "../Components";

function Films() {
  const images = [
    {
      id: 1,
      image:
        "https://ucare.timepad.ru/0a2f93e2-715b-4b2b-af00-ceaa9ec48c6e/poster_event_2301948.jpg",
    },
    { id: 2, image: "https://i.ytimg.com/vi/p4dhNgWYUq8/maxresdefault.jpg" },
    {
      id: 3,
      image:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/d340d150-f149-4953-9f8b-9f77d148a779/3840x",
    },
  ];

  return (
    <>
      <Slider content={images} />
      <div className="films_list_title">Новинки</div>
      <div className="films_list">
        <div className="film_card">
          <a>
            <div className="image_block">
              <img src="https://ucare.timepad.ru/0a2f93e2-715b-4b2b-af00-ceaa9ec48c6e/poster_event_2301948.jpg"></img>
            </div>
            <h2>Аватар</h2>
            <span>
              «Аватар» рассказывает историю инвалида войны, бывшего морского
              пехотинца Джейка Салли, прибывшего на планету Пандора, чтобы
              работать на ресурсодобывающую мегакорпорацию. Салли получает в
              своё распоряжение аватара — тело, которым он может управлять,
              находясь в трансе. Ему удаётся подружиться с разумными жителями
              планеты, народом На’ви. В конце концов Джейк становится военным
              вождём племени и объявляет корпорации войну.
            </span>
          </a>
        </div>
        <div className="film_card">
          <a>
            <div className="image_block">
              <img src="https://i.ytimg.com/vi/p4dhNgWYUq8/maxresdefault.jpg"></img>
            </div>
            <h2>Аватар 2: Путь воды</h2>
            <span>
              Фильм «Аватар 2» продолжает рассказ о судьбе народа Нави, живущего
              на планете Пандора. Землянин Джейк Салли, навсегда оставшись в
              теле своего аватара, существа из племени Нави, наконец, попробует
              обрести свое счастье со своей возлюбленной Нейтири. Джейк и
              Нейтири создадут семью, и Нейтири родит трех очаровательных
              малышей двух мальчиков и девочку.
            </span>
          </a>
        </div>
        <div className="film_card">
          <a>
            <div className="image_block">
              <img src="https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/d340d150-f149-4953-9f8b-9f77d148a779/3840x"></img>
            </div>
            <h2>Форсаж 6</h2>
            <span>
              В фильме Форсаж 6 отошедшего от дел Доминика вербуют, чтобы
              схватить банду грабителей-угонщиков в Европе, в числе которой
              оказывается чудом выжившая Летти. Чтобы разобраться в причинах
              имитации гибели своей возлюбленной Доминик снова собирает самую
              крутую команду по тачкам.
            </span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Films;
