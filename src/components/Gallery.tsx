import React from "react"
import { useState, useRef, useEffect } from "react"
import axios from "axios";

export const getRandomPeople = {
    getData() {
        return axios
      .get(`https://randomuser.me/api?results=20`)
      .then(({ data }) => {
          return data;
      })
      .catch((err) => {
        console.log(err);
      });
        
    }
};

  interface PersonName {
      first: string;
      last: string;
      title: string;
  }

  interface PersonPicture {
      medium: string;
  }

  interface Person {
      name: PersonName;
      picture: PersonPicture;
  }
  
const Gallery = () => {
    const [people, setPeople ] = useState<any>([]);

    useEffect(() => {
        getRandomPeople.getData().then((data) => {
            const users = [...data.results]
            setPeople(users);
        })
    }, []);

    return (
        <div>
            <h1>Gallery</h1>
            <div style={{ display: "flex", flexWrap: "wrap"}}>
                {people.map((p: Person, id: number) => {
                        return (
                            <div key={id} style={{ width: "30%", margin: "5px"}}>
                                <img role="image" src={p.picture.medium} alt={`${p.name.first} ${p.name.last}`}/>
                                <p>{p.name.title} {p.name.first} {p.name.last} </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Gallery