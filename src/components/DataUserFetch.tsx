import React from 'react';
type DataProps = {
    status:
    "loading" | "error" | "success"

}
const DataUserFetch = ({ status }: DataProps) => {
    if (status === "loading") {
        return (
            <><h2>Data is Loading</h2></>
        )

    }
    else if (status === "error") {
        return (
            <><h3>Error. Data could no fetcged</h3></>
        )

    }
    return (
        <div>

            <h2>Data could  fetcged</h2>
        </div>
    );
};

export default DataUserFetch;