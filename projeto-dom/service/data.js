export const removeDatasRepetidas = (datas) => {

    const datasUnicas = [];
    datas.forEach((data => {
        //Se indexOf === -1 -> Não encontrou no array
        if(datasUnicas.indexOf(data.dataFormatada) === -1) {
            if(data.dataFormatada !== 'Invalid date'){
                datasUnicas.push(data.dataFormatada)
            }
        }
    }))
    return datasUnicas;
}

export const ordenaDatas = (data) => {
    data.sort((a, b) => {
        const primeiraData = moment(a, 'DD/MM/YYYY').format('YYYYMMDD');
        const segundaData = moment(b, 'DD/MM/YYYY').format('YYYYMMDD');
        
        return primeiraData - segundaData
    })
}