import { NextPage } from 'next'
import React from 'react'
import Article from '../components/Layout/DetailLayout'
import Layout from '../components/Layout/Layout'

interface detailProps {

}

const detail: NextPage<detailProps> = () => {
  return (
    <Layout title="APSU 埃泊思" type="detail">
      <Article title="Test" author="张三丰" time={"2021年10月30日"}>
        <video controls>
          <source src="test.mp4" type="video/mp4" />
        </video>
        <p>备受推崇的、为工业领域打造的 Wi-Fi 继续在全球分阶段推出，旨在 2025 年达到 5G 的峰值性能容量。 在峰值性能下，5G 将提供超低延迟、99.99% 的可靠性、估计比 4G 快一千倍的高带宽数据包传输。5G 有望通过在工厂车间实现边缘计算、物联网和智能设备的应用来支持工业自动化。支持机器对机器的通信和跨工厂的大型数据集的相互交换是工业 4.0 的一个基本方面。确保进行确定性通信还可以实现实时自动化，以减少人工参与并确保工厂车间的安全。功能齐全的 5G 网络将加速从近实时到实时的转变，从而推动数字化转型技术在工厂车间的应用。例如，依赖于虚拟表示和物理设施之间数据相互交换的数字孪生可以在信息发生时接收信息，而不会出现滞后。5G 网络将扩展数字孪生技术、仿真建模、边缘计算和工业物联网在普通工厂车间的应用。工业企业将能够利用蓬勃发展的 IIoT 和边缘分析市场来解决他们面临的独特挑战。
        </p>
        <img src="aa.png" alt="s" />
        <p>在峰值性能下，5G 将提供超低延迟、99.99% 的可靠性、估计比 4G 快一千倍的高带宽数据包传输。5G 有望通过在工厂车间实现边缘计算、物联网和智能设备的应用来支持工业自动化。支持机器对机器的通信和跨工厂的大型数据集的相互交换是工业 4.0 的一个基本方面。确保进行确定性通信还可以实现实时自动化，以减少人工参与并确保工厂车间的安全。功能齐全的 5G 网络将加速从近实时到实时的转变，从而推动数字化转型技术在工厂车间的应用。例如，依赖于虚拟表示和物理设施之间数据相互交换的数字孪生可以在信息发生时接收信息，而不会出现滞后。5G 网络将扩展数字孪生技术、仿真建模、边缘计算和工业物联网在普通工厂车间的应用。工业企业将能够利用蓬勃发展的 IIoT 和边缘分析市场来解决他们面临的独特挑战。
        </p>
      </Article>
    </Layout >
  )
}

export default detail