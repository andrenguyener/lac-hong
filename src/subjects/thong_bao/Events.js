import React from 'react';
import Navbar from './../../components/navbar';
import Footer from './../../components/footer';
// import $ from 'jquery';
// require('foundation-sites');




class Events extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: "Events",
            width: "0",
            height: "0",
            selectValue: ""
        }
        this.onClick = this.getReceipt.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
//If window width goes below "large" change spans to a hrefs and hide event frame
    componentDidMount() {
        // $(document).foundation();
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
      
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    getReceipt(event) {
        const {title} = event.target;
        if(this.mediaFrame) {
            if(this.state.width >= 1024) {
                this.setState({selectValue: "/contents/" + this.state.page + "/" + title})
            } else {
                var win = window.open("/contents/" + this.state.page + "/" + title, '_blank');
                win.focus();
            }
            
        }
    }

    render() {
        return (
            <div> 
                <Navbar></Navbar>
                <div className="page menu_pdf">
                    <table width="100%" className="stack">
                        <tbody>
                            <tr>
                                <td className="event_menu">
                                    <div className="Main_Panel1" style={{overflow: "auto"}}>
                                        <ul>
                                            <li>
                                                <span title='2014_Thư Mời Lễ Tốt Nghiệp.pdf' onClick={this.onClick}>2014_Thư Mời Lễ Tốt Nghiệp</span>
                                            </li>
                                            <li>
                                                <span title='2015_Picnic.pdf' onClick={this.onClick}>2015_Picnic</span>
                                            </li>
                                            <li>
                                                <span title='2015_Thư Mời Lễ Tốt Nghiệp.pdf' onClick={this.onClick}>2015_Thư Mời Lễ Tốt Nghiệp</span>
                                            </li>
                                            <li>
                                                <span title='Fundraiser2015.pdf' onClick={this.onClick}>Fundraiser2015</span>
                                            </li>
                                            <li>
                                                <span title='Fundraiser_2017_Poster_Tea Palace.pdf' onClick={this.onClick}>Fundraiser_2017_Poster_Tea Palace</span>
                                            </li>
                                            <li>
                                                <span title='Giấy Đồng Ý.htm' onClick={this.onClick}>Giấy Đồng Ý</span>
                                            </li>
                                            <li>
                                                <span title='Gây Quỹ Poster 2014.pdf' onClick={this.onClick}>Gây Quỹ Poster 2014</span>
                                            </li>
                                            <li>
                                                <span title='Gây Quỹ Poster 2015.pdf' onClick={this.onClick}>Gây Quỹ Poster 2015</span>
                                            </li>
                                            <li>
                                                <span title='picnic 2017 TVNLH.docx' onClick={this.onClick}>picnic 2017 TVNLH</span>
                                            </li>
                                            <li>
                                                <span title='Schedule.pdf' onClick={this.onClick}>Schedule</span>
                                            </li>
                                            <li>
                                                <span title='Thư cảm tạ 2015.pdf' onClick={this.onClick}>Thư cảm tạ 2015</span>
                                            </li>
                                            <li>
                                                <span title='Thư cảm tạ 2014.pdf' onClick={this.onClick}>Thư cảm tạ 2014</span>
                                            </li>
                                            <li>
                                                <span title='Thư Cảm Tạ 2012.htm' onClick={this.onClick}>Thư Cảm Tạ 2012</span>
                                            </li>
                                            <li>
                                                <span title='Thư Mời Tết 2016.pdf' onClick={this.onClick}>Thư Mời Tết 2016</span>
                                            </li>
                                            <li>
                                                <span title='Thư Mời Tết Nguyên Đán-2017.pdf' onClick={this.onClick}>Thư Mời Tết Nguyên Đán-2017</span>
                                            </li>
                                            <li>
                                                <span title='Thư Mời Văn Nghệ 2016 tháng 4.pdf' onClick={this.onClick}>Thư Mời Văn Nghệ 2016 tháng 4</span>
                                            </li>
                                            <li>
                                                <span title='Đơn Ghi Danh 2015-2016.pdf' onClick={this.onClick}>Đơn Ghi Danh 2015-2016</span>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td className="event_frame show-for-large">
                                    <div className="responsive-embed">
                                        <iframe frameBorder="0" className="Truyen" title="PDF Viewer" ref={(iframe) => { this.mediaFrame = iframe;}} src={this.state.selectValue}/>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Events;