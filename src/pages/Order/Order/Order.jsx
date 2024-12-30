import Cover from "../../shared/Cover/Cover";
import orderImg from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../hooks/useMenu/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Order = () => {
    const [menu] = useMenu();
    const categories = ['salads', 'pizza', 'soup', 'desserts', 'drinks']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    console.log(category);
    const drinks = menu?.filter(item => item.category === 'drinks');
    const desserts = menu?.filter(item => item.category === 'dessert');
    const pizza = menu?.filter(item => item.category === 'pizza');
    const salad = menu?.filter(item => item.category === 'salad');
    const soup = menu?.filter(item => item.category === 'soup');
    const [tabIndex, setTabIndex] = useState(initialIndex);
    return (
        <div>
            <Cover img={orderImg} title='Order now'></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;