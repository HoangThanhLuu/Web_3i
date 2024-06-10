import Link from "next/link";
import React from "react";

import { FaHandPointRight } from "react-icons/fa";
import "./services.css";

const Content = ({ serviceItem }) => {
  return (
    <div className="w-full ">
      <div className="container relative max-w-full">
        <div className="sm:px-8 md:px-16 lg:px-24 ">
          <div className=" flex flex-col p-0 py-5 sm:bg-white sm:px-8 sm:shadow-md">
            <div className="mb-32 flex flex-col items-center justify-center">
              <h3 className="service-title text-3xl">PHÁT TRIỂN PHẦN MỀM QUỐC TẾ</h3>
              {/* <div>{serviceItem.short_content}</div> */}
            </div>
            {/* <div className='w-full h-[1px] border-t-[2px] border-dashed border-gray-400 mt-8'></div> */}
            {/* <div className="content-services" dangerouslySetInnerHTML={{ __html: serviceItem.full_text }} > */}
            <div className="content-services">
              <div>
                <div className="container-service-content  tracking-wider">
                  <div className="box-wrapper">
                    <h4 className="service-sub-title text-2xl ">
                      Phát triển ứng dụng desktop
                    </h4>
                    <div className="service-content  tracking-wider ">
                      <span className="text-lg text-[#616161] ">
                        Với các dịch vụ phát triển ứng dụng máy tính để bàn của
                        chúng tôi, hệ thống được phát triển đặc biệt để đáp ứng
                        yêu cầu kinh doanh của bạn. Bất kỳ những điều không hài
                        lòng hay khó khăn&nbsp;của bạn xuất hiện trong quá trình
                        phát triển có thể được cải thiện trong quá trình xây
                        dựng phần mềm với sự cho phép của bạn. Phần mềm của bạn
                        được duy trì cho đến khi nào bạn cần với kế hoạch hỗ trợ
                        kỹ thuật hiệu quả và đáng tin cậy của chúng tôi.{" "}
                      </span>
                    </div>
                  </div>
                  <div className="img-service-content  tracking-wider"></div>
                </div>
                <div className="container-service-content  tracking-wider flex-row-reverse">
                  <div className="box-wrapper !ms-11">
                    <span className="service-sub-title text-2xl">
                      Thiết kế và phát triển website
                    </span>
                    <div className="service-content  tracking-wider">
                      <span className="text-lg text-[#616161]">
                        Bạn đang tìm kiếm dịch vụ toàn diện, phát triển web với
                        giá cả phải chăng, tiếp thị và quản lý nội dung? Chúng
                        tôi cung cấp hỗ trợ đầy đủ cho các hệ thống quản lý nội
                        dung, công cụ tìm kiếm tiếp thị (SEM) và công cụ tìm
                        kiếm tối ưu hóa (SEO) cũng như các giải pháp thương mại
                        điện tử. Đội ngũ thiết kế đồ họa sáng tạo và các chuyên
                        gia phát triển web có thể giúp đảm bảo rằng giao diện
                        trang web của bạn phù hợp với hiệu suất làm việc của
                        trang web đó.{" "}
                      </span>
                    </div>
                  </div>
                  <div className="img-service-content2"></div>
                </div>
                <div className="container-service-content  tracking-wider">
                  <div className="box-wrapper">
                    <span className="service-sub-title text-2xl">
                      Phát triển ứng dụng mobile
                    </span>
                    <div className="service-content  tracking-wider">
                      <span className="text-lg text-[#616161]">
                        Di động là một xu hướng không thể tránh khỏi khi số
                        lượng người sử dụng điện thoại thông minh tăng lên với
                        tốc độ nhanh. Làm thế nào bạn có thể thích ứng với xu
                        hướng này? Nếu bạn đang bán hàng trực tuyến, chúng tôi
                        cung cấp cho bạn ứng dụng thương mại điện tử di động
                        giúp mở rộng và nắm bắt nhu cầu kinh doanh của bạn đối
                        với cộng đồng người dùng di động. Nếu bạn đang tìm kiếm
                        các giải pháp để sắp xếp các hoạt động của bạn, chúng
                        tôi giúp bạn xây dựng các ứng dụng di động tùy chỉnh
                        doanh nghiệp để quản lý các nguồn lực từ bất cứ nơi nào.{" "}
                      </span>
                    </div>
                  </div>
                  <div className="img-service-content3"></div>
                </div>
                <div className="container-service-content  tracking-wider flex-row-reverse">
                  <div className="box-wrapper">
                    <span className="service-sub-title text-2xl">
                      Thế mạnh của chúng tôi:
                    </span>
                    <div className="service-content  tracking-wider">
                      <ul className="text-lg text-[#616161]">
                        <li>
                        
                          Là công ty phần mềm có quy mô và uy tín tại Việt Nam
                        </li>
                        <li>
                         
                          Nhiều kinh nghiệm trong các dự án lớn và phức tạp
                        </li>
                        <li>
                          
                          Đội ngũ kỹ sư đông đảo, nắm vững nhiều công nghệ và
                          giải pháp phần mềm trải qua nhiều năm sát cánh để nắm
                          rõ nghiệp vụ và quy trình cùng khách hàng.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="img-service-content4"></div>
                </div>

                <div className="container-service-content  tracking-wider">
                  <div className="box-wrapper">
                    <div>
                      <span className="service-sub-title text-2xl">
                        Công nghệ phát triển
                      </span>
                    </div>
                    <div className="service-content  tracking-wider">
                      <ul className="text-lg text-[#616161]">
                        <li>
                          Ngôn ngữ lập trình: Java, JSP, Servlet, Struts, JSF,
                          C#, VB.NET, ASP.NET, ASP, C/C++, Visual Basic,
                          JavaScript, PL/SQL, Oracle, XML, Python, DotNetNuke,
                          Sharepoint Portal
                        </li>
                        <li>Hệ điều hành: Microsoft Windows, Linux</li>
                        <li>
                          Cơ sở dữ liệu: Oracle, SQL Server, DB2, MySQL,
                          PostgreSQL.
                        </li>
                        <li>
                          Công nghệ: UML, OOAD, COM, J2EE, EJB, .Net, IBM Web
                          Sphere, Oracle iAS, J Boss.
                        </li>
                        <li>
                          Công cụ xử lý giao diện đồ họa: Photoshop,
                          Illustrator, Corel Draw..{" "}
                        </li>
                        <li>
                          Công nghệ phát triển Mobile - App: Cross-platform,
                          Flutter (Google), React-Native, API native,
                          Java+Swift, Firebase Realtime
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="img-service-content5 "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
