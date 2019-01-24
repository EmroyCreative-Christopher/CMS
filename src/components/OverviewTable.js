import React from 'react';
import { Table, Button } from 'reactstrap';
import Tabletop from 'tabletop';


export default class OverviewTable extends React.Component {
    constructor() {
        super()
        this.state = {
            data: undefined

        }
    }

    async componentDidMount() {
        // const response = await fetch('https://api.coinmarketcap.com/v1/ticker/?limit=100')
        // const json = await response.json();
        // this.setState({ data: json });
        // console.log(this.state.data)


        Tabletop.init({
            key: '1E5u-bqDwzZK3acCfbRD4qWKAahNMn-hbFKojVCgcyNI',
            callback: googleData => {
              console.log(googleData)
              this.setState({
                data: googleData
              })
            },
            simpleSheet:true
          })

    }

    render() {
        const { data } = this.state
        return (
            <div>
                {data ?
                    (
                        <Table className="currencyTable" striped bordered>
                            <tbody>
                                <tr className="headerRow">
                                    <th>Product Code</th>
                                    <th>Product Name</th>
                                    <th>Factory</th>
                                    <th>Country</th>
                                    <th>GMO Free?</th>
                                    <th>Suitable For Vegans?</th>
                                    <th>Suitable for Kosher?</th>
                                    <th>Suitable for Halal?</th>
                                    <th></th>
                                </tr>
                                {this.state.data.map(obj =>
                                    <tr className="dataRow">
                                        <td>{obj['Product Code']}</td>
                                        <td>{obj['Product Name']}</td>
                                        <td>{obj['Factory']}</td>
                                        <td>{obj['Country']}</td>
                                        <td>{obj['GMO Free? ( Genetically modified organism )']}</td>
                                        <td>{obj['Suitable for Vegans?']}</td>
                                        <td>{obj['Suitable for Kosher?']}</td>
                                        <td>{obj['Suitable for Halal?']}</td>
                                        <td className="buttonRow"><Button color="danger" className="currencyButton">View</Button>{' '}</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>

                    )
                    :
                    // : <img className="loadingNotification" src="charmander-loading-gif.gif" alt="Loading..." />
                     <img className="loadingNotification" src="ajax-loading-gif.gif" alt="Loading..." />
                }
            </div>
        )
    }

}