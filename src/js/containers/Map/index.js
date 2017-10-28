/**
 *
 * title:
 *
 * description:
 *
 * @author: luli
 *
 * @date: 2017/10/27
 */
import React from 'react';
import echarts from 'echarts'
import xz from '../../../../node_modules/echarts/util/mapdata/geometryCouties/140900.json'
import ll from '../../../../node_modules/echarts/util/mapdata/geometryCouties/141100.json'
import lf from '../../../../node_modules/echarts/util/mapdata/geometryCouties/141000.json'
import jz from '../../../../node_modules/echarts/util/mapdata/geometryCouties/140700.json'
import yc from '../../../../node_modules/echarts/util/mapdata/geometryCouties/140800.json'
import dt from '../../../../node_modules/echarts/util/mapdata/geometryCouties/140200.json'
import cz from '../../../../node_modules/echarts/util/mapdata/geometryCouties/140400.json'
import sz from '../../../../node_modules/echarts/util/mapdata/geometryCouties/140600.json'
import jc from '../../../../node_modules/echarts/util/mapdata/geometryCouties/140500.json'
import yq from '../../../../node_modules/echarts/util/mapdata/geometryCouties/140300.json'
import ty from '../../../../node_modules/echarts/util/mapdata/geometryCouties/140100.json'
import './index.less'

export default class Map extends React.Component{
    componentDidMount(){
        var self=this;
        var a=0;
        self.mapChart(a);
        /*setInterval(function () {
            self.mapChart(a);
            a++
            if(a>=11){
                a=0
            }
        },3000);*/
    }

    mapChart(index){
        var mapdata=[
            {name:'太原市',code:ty},
            {name:'忻州市',code:xz},
            {name:'吕梁市',code:ll},
            {name:'临汾市',code:lf},
            {name:'晋中市',code:jz},
            {name:'运城市',code:yc},
            {name:'大同市',code:dt},
            {name:'长治市',code:cz},
            {name:'朔州市',code:sz},
            {name:'晋城市',code:jc},
            {name:'阳泉市',code:yq}
        ]
        var Chart=echarts.init(this.refs.echartMap);
        echarts.registerMap(mapdata[index].name, mapdata[index].code);
        var geoCoordMap ={
            '北美N1商圈':[112.564677753136,37.7884722462875],
            '下元商圈':[112.505447555567,37.8537559538195],
            '和信摩尔商圈':[112.549393260861,37.8178177337232],
            '长风商务区商圈':[112.52612384891,37.8001933503175],
            '王府井商圈':[112.553259241934,37.8233525656539],
            '中正天街商圈':[112.566141985879,37.850304506414],
            '柳巷商圈':[112.561167980253,37.8637087597858],
            '亲贤街茂业商圈':[112.559970434011,37.8235959340686],
            '万达广场商圈':[112.554979061373,37.8850673540231],
            '太山':[112.43512981668,37.7477726460602],
            '蒙山':[112.443190220146,37.7748766948316],
            '天龙山':[112.376071999457,37.7325458878732],
            '二龙山':[112.431830391484,38.0161082855934],
            '省博物馆':[112.525426123977,37.8647575379417],
            '双塔寺':[112.589648103118,37.8456595650776],
            '动物园':[112.575582713839,37.9100777170042],
            '晋祠':[112.442442320472,37.7072856992626],
            '临汾乔李机场':[111.637382788238,36.1307509416175],
            '长治王村机场':[113.120998835442,36.2456811946583],
            '太原武宿':[112.625808318861,37.7545261343582],
            '吕梁大武机场':[111.138692733129,37.6846287281359],
            '运城关公机场':[111.037138378628,35.1139288616852],
            '大同云冈机场':[113.479700397979,40.0615835536902],
            '五台山机场':[112.983416621494,38.5992974500557],
            '太原南站':[112.62,37.8],
            '太原站':[112.59,37.87],
            '建南汽车站':[112.57739608469,37.8309319118792],
            '太原汽车站':[112.571876388053,37.8590847011014],
            '太原迎宾汽车站':[112.582630956137,37.8138889037399],
            '太原汽车客运东站':[112.610270160149,37.8648203998161],
            '太原汽车客运西站':[112.48,37.86],
            '红灯笼体育馆':[112.529166029146,37.758061153749]
        }
        var url='image:///src/js/containers/Chart/image/机场.png';

        var data =[{name:'北美N1商圈',symbol:url,coord:[112.564677753136,37.7884722462875],value:20724},
            {name:'下元商圈',coord:[112.505447555567,37.8537559538195],value:38196},
            {name:'和信摩尔商圈',coord:[112.549393260861,37.8178177337232],value:31322},
            {name:'长风商务区商圈',coord:[112.52612384891,37.8001933503175],value:22252},
            {name:'王府井商圈',coord:[112.553259241934,37.8233525656539],value:22888},
            {name:'中正天街商圈',coord:[112.566141985879,37.850304506414],value:42438},
            {name:'柳巷商圈',coord:[112.561167980253,37.8637087597858],value:38157},
            {name:'亲贤街茂业商圈',coord:[112.559970434011,37.8235959340686],value:28421},
            {name:'万达广场商圈',coord:[112.554979061373,37.8850673540231],value:30838},
            {name:'太山',coord:[112.43512981668,37.7477726460602],value:3223},
            {name:'蒙山',coord:[112.443190220146,37.7748766948316],value:13750},
            {name:'天龙山',coord:[112.376071999457,37.7325458878732],value:126},
            {name:'二龙山',coord:[112.431830391484,38.0161082855934],value:20097},
            {name:'省博物馆',coord:[112.525426123977,37.8647575379417],value:203821},
            {name:'双塔寺',coord:[112.589648103118,37.8456595650776],value:156372},
            {name:'动物园',coord:[112.575582713839,37.9100777170042],value:119748},
            {name:'晋祠',coord:[112.442442320472,37.7072856992626],value:30994},
            {name:'临汾乔李机场',coord:[111.637382788238,36.1307509416175],value:5415},
            {name:'长治王村机场',coord:[113.120998835442,36.2456811946583],value:15695},
            {name:'太原武宿',coord:[112.625808318861,37.7545261343582],value:39065},
            {name:'吕梁大武机场',coord:[111.138692733129,37.6846287281359],value:4322},
            {name:'运城关公机场',coord:[111.037138378628,35.1139288616852],value:19372},
            {name:'大同云冈机场',coord:[113.479700397979,40.0615835536902],value:2467},
            {name:'五台山机场',coord:[112.983416621494,38.5992974500557],value:1234},
            {name:'太原南站',coord:[112.62,37.8],value:12678},
            {name:'太原站',coord:[112.59,37.87],value:17301},
            {name:'建南汽车站',coord:[112.57739608469,37.8309319118792],value:36584},
            {name:'太原汽车站',coord:[112.571876388053,37.8590847011014],value:44919},
            {name:'太原迎宾汽车站',coord:[112.582630956137,37.8138889037399],value:28563},
            {name:'太原汽车客运东站',coord:[112.610270160149,37.8648203998161],value:6927},
            {name:'太原汽车客运西站',coord:[112.48,37.86],value:36070},
            {name:'红灯笼体育馆',coord:[112.529166029146,37.758061153749],value:46861}]


        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        };

        var option = {
            tooltip : {
                trigger: 'item',
                formatter: '{b}'
            },
            series : [
                {
                    name: '山西省地市地图',
                    type: 'map',
                    mapType: mapdata[index].name,
                    selectedMode : 'single',
                    grid: {
                        left: '3%',
                        right: '3%',
                        bottom: '5%',
                        top: '20%',
                        containLabel: true
                    },
                    itemStyle:{
                        normal:{
                            label:{show:false},
                            areaColor: 'rgba(41,36,33,0.3)',
                            borderColor:'#00CDB1',
                            shadowColor: 'rgba(0, 219, 255, 0.7)',
                            shadowBlur: 20,
                            borderWidth:2
                        },
                        emphasis:{
                            label:{show:true,
                                color:'#fff'},
                            areaColor: 'rgba(41,36,33,0.7)',
                            borderWidth:1
                        }
                    },
                    data:[],
                    markPoint : {
                        symbolSize: 15,       // 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
                        itemStyle: {
                            normal: {
                                borderColor: '#87cefa',
                                borderWidth: 1,            // 标注边线线宽，单位px，默认为1
                                label: {
                                    show: false
                                }
                            },
                            emphasis: {
                                borderColor: '#1e90ff',
                                borderWidth: 5,
                                label: {
                                    show: false
                                }
                            }
                        },
                        data : data
                    },
                },

            ]
        };
        Chart.setOption(option);
    }
    render(){
        return(
            <div style={{margin: '0px',background:'url(/src/images/sky2.jpg)',border:"1px blue solid"}}>
                <div ref="echartMap" style={{width:"500px",height:"500px"}}></div>
                <div className="ws-map-table"></div>
            </div>
        )
    }
}