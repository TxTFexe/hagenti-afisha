import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSection } from "../redux/slices/sectionsSlice";

function Sections() {
const section = useSelector((state) => state.sections.id)
const dispath = useDispatch();
const [activeSection, setActiveSection] = React.useState(1);

const list = [
    {id: 1, name: 'Кино'},
    {id: 2, name: 'Театр'}
]

const onClickSection = (obj) => {
    dispath(setSection(obj.id));
    dispath(setSection(obj.name));
    setActiveSection(obj.id);
}

    return (
        <>
            <div className="sections">
                {
                    list.map((obj) => (
                        <a onClick={() => onClickSection(obj)} className={obj.id === activeSection ? 'active_section' : ''} key={obj.id}>{obj.name}</a>
                    ))
                }
            </div>
        </>
    );
}

export default Sections;