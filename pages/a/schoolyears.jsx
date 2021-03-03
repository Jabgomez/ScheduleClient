//Components
import ContentHeader from '../../components/layout/ContentHeader'
import Form from '../../components/schoolyears/Form'
import Table from '../../components/schoolyears/Table'

const Schoolyears = () => {
    return (
        <>      
            <ContentHeader root="Home" section="Administración" path="Periodos lectivos"/>
            <div className="content-body">
                <section id="basic-horizontal-layouts">
                    <div className="row">
                        <div className="col-md-12 col-12">
                            <Form/>
                        </div>
                        <div className="col-md-12 col-12">
                            <Table/>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
 
export default Schoolyears;