//Components
import ContentHeader from '../../components/layout/ContentHeader'

import Statistics from '../../components/cargaHoraria/Statistics';
import GroupReport from '../../components/cargaHoraria/GroupReport';
import IndividualReport from '../../components/cargaHoraria/IndividualReport';

import { Doughnut } from 'react-chartjs-2'
import { User } from 'react-feather';
import RedirectSchoolyear from '../../components/redirect/RedirectSchoolyear';

const carga = () => {

    const data1 = {
        datasets: [{
            data: [10, 20, 30],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
        }],

        labels: [
            'Completos',
            'Vacios',
            'Incompletos'
        ]
    };

    return (  
        <RedirectSchoolyear>      
            <ContentHeader root="Home" section="Reportes" path="Carga horaria"/>
            <div className="content-body">
                <section id="basic-horizontal-layouts">
                    <div className="row">
                        <Statistics/>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <GroupReport/>
                        </div>
                        <div className="col-6">
                            <IndividualReport/>
                        </div>
                        {/*
                        <div className="col-6">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">Pruebas</h4>
                                </div>
                                <div class="card-body">
                                    <Doughnut
                                        data = {data1}
                                    />
                                    <div class="d-flex justify-content-between mt-3 mb-1">
                                        <div class="d-flex align-items-center">
                                            <User/>
                                            <span class="font-weight-bold ml-75 mr-25">Prueba</span>
                                            <span>- 80%</span>
                                        </div>
                                        <div>
                                            <span>2%</span>
                                            <i data-feather="arrow-up" class="text-success"></i>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between mb-1">
                                        <div class="d-flex align-items-center">
                                            <User/>
                                            <span class="font-weight-bold ml-75 mr-25">Prueba</span>
                                            <span>- 10%</span>
                                        </div>
                                        <div>
                                            <span>8%</span>
                                            <i data-feather="arrow-up" class="text-success"></i>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <User/>
                                            <span class="font-weight-bold ml-75 mr-25">Prueba</span>
                                            <span>- 10%</span>
                                        </div>
                                        <div>
                                            <span>-5%</span>
                                            <i data-feather="arrow-down" class="text-danger"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>*/}
                    </div>
                </section>
            </div>
        </RedirectSchoolyear>
    );
}
 
export default carga;