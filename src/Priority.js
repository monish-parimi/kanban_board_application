import React from 'react'
import { useEffect, useState } from 'react';
import './Status.css'
import plusmore from './add.svg'
import more from './3 dot menu.svg'
import nopriorityimg from './No-priority.svg'
import urgentimg from './SVG - Urgent Priority colour.svg'
import urgentimggrey from './SVG - Urgent Priority grey.svg'
import highimg from './Img - High Priority.svg'
import mediumimg from './Img - Medium Priority.svg'
import lowimg from './Img - Low Priority.svg'
import CardPriority from './CardPriority';

const Priority = (props) => {
    const [todono, settodono] = useState();
    let usersdata = [''];
    const [tick, setTick] = useState([{ "id": "CAM" }]);
    const [nopriority, setnopriority] = useState([]);
    const [lowpriority, setlowpriority] = useState([]);
    const [hightpriority, sethightpriority] = useState([]);
    const [mediumpriority, setmediumpriority] = useState([]);
    const [urgent, seturgent] = useState([]);
    const [todonum, setTodonum] = useState(0);
    useEffect(() => {
        hello();
    }, []);
    useEffect(() => {
      count();
    }, [tick])
    
    async function hello() {
        try {
            const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
            const result = await response.json();
            setTick(result.tickets);
        } catch (error) {
            console.error("Error:", error);
        }
    }
    function count() {
        let noprioritypre=[];
        let lowprioritypre=[];
        let mediumprioritypre=[];
        let hightprioritypre=[];
        let urgetnpre=[];

        tick.map((ticket) => {
            if (ticket.priority === 0) noprioritypre.push(ticket);
            if (ticket.priority === 1)  lowprioritypre.push(ticket);
            if (ticket.priority === 2)  mediumprioritypre.push(ticket);
            if (ticket.priority === 3)  hightprioritypre.push(ticket);
            if (ticket.priority === 4)  urgetnpre.push(ticket);
        }
        )
        noprioritypre.sort((a, b) => a.title.localeCompare(b.title));
        lowprioritypre.sort((a, b) => a.title.localeCompare(b.title));
        mediumprioritypre.sort((a, b) => a.title.localeCompare(b.title));
        hightprioritypre.sort((a, b) => a.title.localeCompare(b.title));
        urgetnpre.sort((a, b) => a.title.localeCompare(b.title));
       
        setnopriority(noprioritypre);
        setlowpriority(lowprioritypre);
        setmediumpriority(mediumprioritypre);
        sethightpriority(hightprioritypre);
        seturgent(urgetnpre);
    }
    
return (
        <div className='Boards'>
            <div className='Board'>
                <div className='boardHeading'>
                    <img src={nopriorityimg} className='headingImg' alt=''></img>
                    <p className='cText' style={{width: "190px"}} >No-Priority</p>
                    <p className='cText'>{nopriority.length}</p>
                    <div className='boardHeading' id='pluske'>
                        <img src={plusmore} className='headingImg' alt=''></img>
                        <img src={more} className='headingImg' alt=''></img>
                    </div>
                </div>
                <div className='Cards'>
                    {
                        nopriority.length > 0 &&
                        nopriority.map((ticket) => {
                            return (
                                (ticket.priority === 0 && <CardPriority  ticket={ticket}></CardPriority>)
                            )
                        })     
                    }
                </div>
            </div>
            <div className='Board'>
                <div className='boardHeading'>
                    <img src={urgentimg} className='headingImg' alt=''></img>
                    <p className='cText'>Urgent</p>
                    <p className='cText'>{urgent.length}</p>
                    <div className='boardHeading' id='pluske'>

                        <img src={plusmore} className='headingImg' alt=''></img>
                        <img src={more} className='headingImg' alt=''></img>
                    </div>
                </div>
                <div className='Cards'>
                    {
                        urgent.length > 0 &&
                        urgent.map((ticket) => {
                            return (
                                (ticket.priority === 4 && <CardPriority ticket={ticket}></CardPriority>)
                            )
                        })
                    }
                </div>
            </div>
            <div className='Board'>
                <div className='boardHeading'>
                    <img src={highimg} className='headingImg' alt=''></img>
                    <p className='cText'>High</p>
                    <p className='cText'>{hightpriority.length}</p>
                    <div className='boardHeading' id='pluske'>
                        <img src={plusmore} className='headingImg' alt=''></img>
                        <img src={more} className='headingImg' alt=''></img>
                    </div>
                </div>
                <div className='Cards'>
                    {
                        hightpriority.length > 0 &&
                        hightpriority.map((ticket) => {
                            return (
                                (ticket.priority === 3 && <CardPriority ticket={ticket}></CardPriority>)
                            )
                        })
                    }
                </div>
            </div>
            <div className='Board'> 
                <div className='boardHeading'>
                    <img src={mediumimg} className='headingImg' alt=''></img>
                    <p className='cText'>Medium</p>
                    <p className='cText'>{mediumpriority.length}</p>
                    <div className='boardHeading' id='pluske'>

                        <img src={plusmore} className='headingImg' alt=''></img>
                        <img src={more} className='headingImg' alt=''></img>
                    </div>
                </div>
                <div className='Cards'>
                    {
                        mediumpriority.length > 0 &&
                        mediumpriority.map((ticket) => {
                            return (
                                (ticket.priority === 2 && <CardPriority ticket={ticket}></CardPriority>)
                            )
                        })
                    }
                </div>
            </div>
            <div className='Board'>
                <div className='boardHeading'>
                    <img src={lowimg} className='headingImg' alt=''></img>
                    <p className='cText'>Low</p>
                    <p className='cText'>{lowpriority.length}</p>
                    <div className='boardHeading' id='pluske'>
                        <img src={plusmore} className='headingImg' alt=''></img>
                        <img src={more} className='headingImg' alt=''></img>
                    </div>
                </div>
                <div className='Cards'>
                    {
                        lowpriority.length > 0 &&
                        lowpriority.map((ticket) => {
                            return (
                                (ticket.priority === 1 && <CardPriority ticket={ticket} ></CardPriority>)
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Priority