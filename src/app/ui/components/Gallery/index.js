"use client";
import { useState } from "react";
import styles from "./Gallery.module.css";

const tabsList = [
  { tabId: "CARDIOLOGY", displayText: "Cardiology" },
  { tabId: "Psychiatry", displayText: "Psychiatry" },
  { tabId: "HOSPITAL", displayText: "Hospital" },
];

const imagesList = [
  {
    id: "1",
    imageUrl:
      "https://th.bing.com/th/id/OIP.DM83ijMGYP36AVUw2REobwHaEw?rs=1&pid=ImgDetMain",
    category: "CARDIOLOGY",
  },
  {
    id: "2",
    imageUrl:
      "https://th.bing.com/th/id/OIP.gAWPr9nyEhHzLkH6h67G7QHaD4?rs=1&pid=ImgDetMain",
    category: "PSYCHIATRIST",
  },
  {
    id: "3",
    imageUrl:
      "https://neurotorium.org/wp-content/uploads/brain_feature_illustration_01-04_0.png",
    category: "PSYCHIATRIST",
  },
  {
    id: "4",
    imageUrl:
      "https://th.bing.com/th/id/R.45b73cbdfedb0c6e4d50a8092355f9b3?rik=HOyUAzFZ7TFicA&riu=http%3a%2f%2fowh-inc.com%2fwp-content%2fuploads%2f2016%2f11%2f16F_room_view.jpg&ehk=VSKOnTnfY8dR5tNfCHyugwNfKgyMQeWS2AOHWqxGAfQ%3d&risl=1&pid=ImgRaw&r=0",
    category: "HOSPITAL",
  },
  {
    id: "5",
    imageUrl:
      "https://i.pinimg.com/originals/6f/9b/81/6f9b81d3e5753a283d2939faae447cd8.png",
    category: "PSYCHIATRIST",
  },
  {
    id: "6",
    imageUrl:
      "https://th.bing.com/th/id/OIP.L7PCPPQWMokW4mdjSPxzeQD6D6?w=300&h=300&rs=1&pid=ImgDetMain",
    category: "HOSPITAL",
  },
  {
    id: "7",
    imageUrl:
      "https://th.bing.com/th/id/OIP.OVKu7t5JPqG4NtgRpHTePgHaFf?w=1200&h=889&rs=1&pid=ImgDetMain",
    category: "PSYCHIATRIST",
  },
  {
    id: "8",
    imageUrl:
      "https://static.wixstatic.com/media/11062b_9c08650975bb4dd3bece7d216d5d8610~mv2.jpg/v1/fill/w_560,h_373,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Psychoanalyst.jpg",
    category: "PSYCHIATRIST",
  },
  {
    id: "9",
    imageUrl:
      "https://th.bing.com/th/id/R.407fad4dd70ff2a650c99975681275cf?rik=TMBqU7sbnZK12w&riu=http%3a%2f%2fmedia.beam.usnews.com%2f8d%2f54%2fb93256134c9782148fc03484d795%2f160816-editorial.JPG&ehk=y37XvzcWLeJeu%2f96WpLhbUSRUjcV1U6rHNClCxmJ%2fQc%3d&risl=&pid=ImgRaw&r=0",
    category: "HOSPITAL",
  },
  {
    id: "10",
    imageUrl:
      "https://th.bing.com/th/id/OIP.is-Zd-NbzHp0_WEPRvPvWgHaE8?rs=1&pid=ImgDetMain",
    category: "CARDIOLOGY",
  },
  {
    id: "11",
    imageUrl:
      "https://www.mic.ca/wp-content/uploads/2017/06/cardiac-studies-1-1024x682.jpg",
    category: "CARDIOLOGY",
  },
  {
    id: "12",
    imageUrl:
      "https://www.anzca.edu.au/Anzca/media/Anzca/Level%202%20Teaser%20Images/2-maori-doctor.jpg?ext=.jpg",
    category: "HOSPITAL",
  },
  {
    id: "13",
    imageUrl:
      "https://th.bing.com/th/id/OIP.mtJcnrmlYtUsoVfd5_iNYgHaE7?w=1280&h=852&rs=1&pid=ImgDetMain",
    category: "HOSPITAL",
  },
  {
    id: "14",
    imageUrl:
      "https://th.bing.com/th/id/OIP.LqubwVDXfCDGfobSJtqmdwAAAA?w=474&h=262&rs=1&pid=ImgDetMain",
    category: "CARDIOLOGY",
  },
  {
    id: "15",
    imageUrl:
      "https://i0.wp.com/crescentcitypsychiatric.com/wp-content/uploads/2022/08/senior-patient-talking-to-psychologist.jpg",
    category: "PSYCHIATRIST",
  },
  {
    id: "16",
    imageUrl:
      "https://th.bing.com/th/id/OIP.a5m0m0hDjpKR4gzouXw0PAHaFj?rs=1&pid=ImgDetMain",
    category: "HOSPITAL",
  },
  {
    id: "17",
    imageUrl:
      "https://media.istockphoto.com/id/185291102/photo/doctor-prescribing-medication.jpg?s=612x612&w=0&k=20&c=X3QCatf2AV6qq5JD_yu7eugWxzc-Y4qXTTwAdansVic=",
    category: "PSYCHIATRIST",
  },
  {
    id: "18",
    imageUrl:
      "https://i2-prod.chroniclelive.co.uk/incoming/article23826384.ece/ALTERNATES/s615/0_ray-and-marjorie-connor-and-his-care-team-1JPG.jpg",
    category: "HOSPITAL",
  },
  {
    id: "19",
    imageUrl:
      "https://socialblast.club/upload/photos/2023/08/VjSobjtnYVVqhXWviMVf_24_f264bd4620718debd5babf6f5e441fbc_image.jpg",
    category: "CARDIOLOGY",
  },
  {
    id: "20",
    imageUrl:
      "https://static.wixstatic.com/media/4b9658_fd6e3390952a432ab9375b2e76902c24~mv2.jpg/v1/fill/w_870,h_410,al_c,lg_1,q_80,enc_auto/4b9658_fd6e3390952a432ab9375b2e76902c24~mv2.jpg",
    category: "CARDIOLOGY",
  },
  {
    id: "21",
    imageUrl:
      "https://th.bing.com/th/id/OIP.4tFq4sx9zyXpysDB4gBsZAHaEK?rs=1&pid=ImgDetMain",
    category: "HOSPITAL",
  },
  {
    id: "22",
    imageUrl:
      "https://th.bing.com/th/id/OIP.ZyJRf1ffUPVzLrJD0wXtPQHaHa?rs=1&pid=ImgDetMain",
    category: "CARDIOLOGY",
  },
  {
    id: "23",
    imageUrl:
      "https://2.bp.blogspot.com/-TYCmRK1BxzI/Wk0e4WJJVFI/AAAAAAAATKw/DX-K53S1x4sNJesnB4JBDZ56iWj6TNKowCK4BGAYYCw/s1600/Heart%2BCenter%2B%257C%2BPediatric%2BCardiology%2BFellowship%2BProgram%2B%257C%2BBoston%2B...-715940.jpg",
    category: "CARDIOLOGY",
  },
  {
    id: "24",
    imageUrl:
      "https://psychologydictionary.org/wp-content/uploads/2016/03/psychiatrist-hospitals-for-children.jpg",
    category: "PSYCHIATRIST",
  },
  {
    id: "25",
    imageUrl:
      "https://s3-media0.fl.yelpcdn.com/bphoto/cDBvzXBufMzX4MLw34w8Zw/ls.jpg",
    category: "HOSPITAL",
  },
  {
    id: "26",
    imageUrl:
      "https://images.fineartamerica.com/images-medium-large-5/9-psychiatrist-and-patient-mauro-fermarielloscience-photo-library.jpg",
    category: "PSYCHIATRIST",
  },
  {
    id: "27",
    imageUrl:
      "https://media.healthnews.com/images/750w/2023/04/Pediatric-Heart-Disease.jpg",
    category: "CARDIOLOGY",
  },
  {
    id: "28",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5303ce56e4b06696021568ab/1557772823561-TZHVU1DCEBGN45NZ7OHS/ke17ZwdGBToddI8pDm48kOE8poCFVA3SVCnFcSJDvpV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0ktJPZ5nzlpAQ9l-HYKRq6WtA6I_x4pFpYoHyCJt8m9Rfz8_hgRs6Rf3qd8DGa1PDg/hostpial+wayfinding+sign+on+wall.jpg",
    category: "HOSPITAL",
  },
  {
    id: "29",
    imageUrl:
      "https://spectrum.ieee.org/media-library/image-of-brain.jpg?id=25564207&width=1200&height=600&coordinates=0%2C77%2C0%2C78",
    category: "PSYCHIATRIST",
  },
  {
    id: "30",
    imageUrl:
      "https://www.columbiadoctors.org/sites/default/files/styles/cola_media_1600/public/media/images/2021-02/cardiology.jpg?itok=jCMoYWF-",
    category: "CARDIOLOGY",
  },
  {
    id: "31",
    imageUrl:
      "https://deborahadmin.com/app/uploads/sites/2/2020/07/pediatric-cardiology-1440x810.jpg",
    category: "CARDIOLOGY",
  },
  {
    id: "32",
    imageUrl: "https://i.ytimg.com/vi/sP397Ddo_v0/maxresdefault.jpg",
    category: "CARDIOLOGY",
  },
  {
    id: "33",
    imageUrl:
      "https://www.evolvepsychiatry.com/wp-content/uploads/shutterstock_529084606.jpg",
    category: "PSYCHIATRIST",
  },
  {
    id: "34",
    imageUrl:
      "https://render.fineartamerica.com/images/rendered/square-dynamic/small/images-medium-large-5/1-radiographer-viewing-a-ct-scan-aberration-films-ltdscience-photo-library.jpg",
    category: "PSYCHIATRIST",
  },
  {
    id: "35",
    imageUrl:
      "https://www.drawingwars.com/assets/img/cartoons/how-to-draw-a-hospital-step-by-step/step13.png",
    category: "HOSPITAL",
  },
  {
    id: "36",
    imageUrl:
      "https://qtxasset.com/fiercehealthcare/1562973884/GettyImages-898906336.jpg/GettyImages-898906336.jpg?OhHp8.hb4iZbXQ.xHf4.JzCZpWlc56My",
    category: "HOSPITAL",
  },
];

const Gallery = () => {
  const [category, setCategory] = useState("CARDIOLOGY");

  const clickTab = (tabId) => {
    setCategory(tabId);
  };

  const allImagesList = imagesList.filter(
    (eachValue) => eachValue.category === category
  );

  return (
    <div className={styles["main-container"]} id="gallery">
      <div>
        <h1 className={styles.heading}>Gallery</h1>
        <div>
          <ul className={styles["tab-elements"]}>
            {tabsList.map((eachValue) => (
              <li key={eachValue.tabId}>
                <button
                  type="button"
                  className={`${styles["tab-button"]} ${
                    category === eachValue.tabId ? styles["highlight-text"] : ""
                  }`}
                  onClick={() => clickTab(eachValue.tabId)}
                >
                  {eachValue.displayText}
                </button>
              </li>
            ))}
          </ul>
          <ul className={styles["showing-images"]}>
            {allImagesList.map((eachObject) => (
              <li key={eachObject.id} className={styles["image-space"]}>
                <img
                  src={eachObject.imageUrl}
                  className={styles["showing-image"]}
                  alt="imageUrl"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
