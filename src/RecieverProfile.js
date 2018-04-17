import React,{Component} from 'react'

class RecieverProfile extends Component{
    render(){
        return(
            <div>
                <h1 className='center'>Food Bank</h1>
                <hr />
                <div className='organization-info'>
                    <h3>Contact Email: main@foodbank.com</h3>
                    <h3>Contact Phone: (555)555-5555</h3>
                    <h3>Address: 123 N Main St</h3>
                    <h3>City: Seattle</h3>
                    <h3>State: Wa</h3>
                    <h3>Delivery Hours: Mon-Sun 9am - 10pm</h3>
                    <hr />
                    <div className='demand'>
                        <p>Canned Fruit: High</p>
                        <p>Canned Veggies: High</p>
                        <p>Canned Noodles: High</p>
                        <p>Canned Rice: High</p>                        
                    </div>
                    <hr/>
                    <h3 className='center'>List of Approved Contacts</h3>
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>Emily</td>
                            <td>555-555-5551</td>
                            <td>Emily@foodbank.com</td>
                            <td>Director</td>
                        </tr>
                        <tr>
                            <td>Kyle</td>
                            <td>555-555-5550</td>
                            <td>Kyle@foodbank.com</td>
                            <td>Donation Manager</td>
                        </tr>
                        <tr>
                            <td>Mo</td>
                            <td>555-555-5552</td>
                            <td>Mo@foodbank.com</td>
                            <td>Facilities Manager</td>
                        </tr>
                        <tr>
                            <td>John</td>
                            <td>555-555-5553</td>
                            <td>John@foodbank.com</td>
                            <td>Volunteers Manager</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <br />
                <a className='btn'>Edit Info</a>
                <br />
            </div>
        )
    }
}
export default RecieverProfile