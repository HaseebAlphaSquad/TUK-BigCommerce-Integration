import React, { Children } from "react"
import Sidebar from '../../components/Layouts/SearchLayout'

const SearchLayout = (props: { children: React.ReactNode; }) => (
    <div>
        <Sidebar/>
        {Children}
    </div>
);

export default SearchLayout;