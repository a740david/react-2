import { useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import {IMG_DATA} from "./imgsData.js"
import SearchImg from "./SearchImg";
import ImgCounter from "./ImgCounter";



export default function SearchForm(props) {

    console.log("Rendering SearchForm")

    const [searchText, setSearchText] = useState("")
    const [currImgUrl, setCurrImgUrl] = useState(0)

    const [searchCount, setSearchCount] = useState(0);
    const [imageSearchCount, setImageSearchCount] = useState(0);

    const[index, setIndex]=useState(0)


    const handleTextSubmit = (event) => {


        event.preventDefault()
        console.log(IMG_DATA)

        setSearchCount(searchCount+1)

        if (searchText.toLowerCase() in IMG_DATA) {
            console.log(IMG_DATA.searchText)
            setCurrImgUrl(IMG_DATA[searchText])
            setImageSearchCount(imageSearchCount + 1)
        } else {
            setCurrImgUrl('NOT_FOUND')
        }
    }
    const handeleClear=()=>{
        setSearchText('')
        setCurrImgUrl('')

    }

    // let elem = null
    // if (currImgUrl === 'NOT_FOUND') {
    //     elem = <p>Image does not exist</p>
    // } else if (currImgUrl === null) {
    //     elem = ''
    // } else {
    //     elem = <SearchImg imgUrl={currImgUrl}/>

    // }

    const handlePrev = () => {
        if (index > 0) {
          setIndex(index - 1);
        }
      };

      const handleNext = () => {
        if (index < currImgUrl.length - 1) {
          setIndex(index + 1);
        }
      };
    return(
        <Stack gap={5} className="col-md-5 mx-auto">
            <Form className="col-md-5 mx-auto" onSubmit={handleTextSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="search-input">Search for image:</Form.Label>
                    {/* Controlled component */}
                    <Form.Control

                        type="text"
                        placeholder="Insert your text here"
                        value={searchText}
                        onChange = {
                            (event) => {setSearchText(event.target.value)}}
                    />
                </Form.Group>

                {/* onClick={setSearchText('')} */}
                <Button v variant="primary" type="submit">Show</Button>
                <Button variant="primary" type="button" onClick={handeleClear} >Clear</Button>
            </Form>

            {/* {currImgUrl &&
                <SearchImg imgUrl={currImgUrl}/>
            }  */}

             {currImgUrl === 'NOT_FOUND'
            ?
                <p>No image detected</p>
            :
                currImgUrl === null
                ?
                    null
                :
                <div>

                <div >

                    <SearchImg  alt="image" imgUrl={currImgUrl[index]}/>
                    <div>

              {currImgUrl.length > 1 && (
              <div>
                 <button onClick={handlePrev} disabled={index === 0}>
                 &lt;
                 </button>
                 <button onClick={handleNext} disabled={index === currImgUrl.length - 1}>
                 &gt;
                 </button>
            </div>
            )}
           </div>
                </div>


                </div>
             }

            <ImgCounter searches={searchCount}  imageSearchCount={imageSearchCount}  />


            {/* {elem} */}
        </Stack>
    );

}