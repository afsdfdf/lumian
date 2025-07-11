'use client';

/* eslint-disable react/no-unescaped-entities */
import { ScrollReveal } from '../../src/components/animations';

export default function TwitterStrategyPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Lumina Twitter 运营策略</h1>
                <p className="text-text-medium text-lg mb-8">
                  基于Lumina项目白皮书和网站内容的完整推特营销方案分析
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 项目分析 */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h2 className="text-3xl font-heading font-bold mb-6">1. 项目需求分析</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-4">核心挑战</h3>
                    <ul className="text-text-medium space-y-2">
                      <li>• 全球26亿人仍无网络接入</li>
                      <li>• 传统ISP部署成本高昂</li>
                      <li>• 数字鸿沟日益扩大</li>
                      <li>• 网络审查和隐私问题</li>
                      <li>• 农村地区覆盖不足</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-4">Lumina解决方案</h3>
                    <ul className="text-text-medium space-y-2">
                      <li>• DePIN去中心化基础设施</li>
                      <li>• 多功能挖矿硬件设备</li>
                      <li>• 数据信用稳定价格机制</li>
                      <li>• 社区驱动网络治理</li>
                      <li>• 新兴市场专注策略</li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 项目定位主题 */}
      <section className="py-16">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h2 className="text-3xl font-heading font-bold mb-6">2. 项目内容定位主题</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="border border-border p-6 rounded-lg">
                    <h3 className="text-xl font-heading font-bold mb-4 text-primary">技术创新</h3>
                    <ul className="text-text-medium space-y-2">
                      <li>• Solana高性能区块链</li>
                      <li>• 65,000+ TPS处理能力</li>
                      <li>• 多功能硬件集成</li>
                      <li>• Wi-Fi 6E + 5G小基站</li>
                      <li>• HSM硬件安全模块</li>
                      <li>• Layer 2状态通道</li>
                    </ul>
                  </div>
                  <div className="border border-border p-6 rounded-lg">
                    <h3 className="text-xl font-heading font-bold mb-4 text-primary">代币经济学</h3>
                    <ul className="text-text-medium space-y-2">
                      <li>• LUMINA代币总量100亿</li>
                      <li>• 55%网络挖矿奖励</li>
                      <li>• 数据信用销毁机制</li>
                      <li>• 5-15% APY质押奖励</li>
                      <li>• 稳定价格数据信用</li>
                      <li>• DAO治理模式</li>
                    </ul>
                  </div>
                  <div className="border border-border p-6 rounded-lg">
                    <h3 className="text-xl font-heading font-bold mb-4 text-primary">竞争优势</h3>
                    <ul className="text-text-medium space-y-2">
                      <li>• 多服务整合方案</li>
                      <li>• 新兴市场专注</li>
                      <li>• LSO合作伙伴模式</li>
                      <li>• 低门槛参与机制</li>
                      <li>• 社区所有权模式</li>
                      <li>• 抗审查网络设计</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-secondary rounded-lg">
                  <h3 className="text-xl font-heading font-bold mb-4">核心价值主张</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-text-medium mb-2"><strong>愿景：</strong></p>
                      <p className="text-text-medium">成为世界领先的去中心化网络基础设施，推动数字包容性和全球网络接入公平性</p>
                    </div>
                    <div>
                      <p className="text-text-medium mb-2"><strong>使命：</strong></p>
                      <p className="text-text-medium">利用区块链技术和DePIN模式构建开放、透明、社区维护的全球网络</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 营销策略框架 */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-heading font-bold mb-6">3. 一个月推特运营方案框架</h2>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-heading font-bold mb-4">营销策略时间线</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-secondary rounded-lg">
                      <h4 className="font-bold mb-2">起始日期：2025年7月11日</h4>
                      <h4 className="font-bold mb-2">结束日期：2025年8月11日</h4>
                      <p className="text-text-medium">完整一个月的系统性营销推广</p>
                    </div>
                    <div className="p-4 bg-secondary rounded-lg">
                      <h4 className="font-bold mb-2">发布频率：每天2-3条</h4>
                      <h4 className="font-bold mb-2">总推文数：约80-90条</h4>
                      <p className="text-text-medium">确保持续的用户参与度</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-heading font-bold mb-4">内容分期策略</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="border border-border p-4 rounded-lg">
                      <h4 className="font-bold mb-2 text-primary">第1周：项目教育</h4>
                      <ul className="text-sm text-text-medium space-y-1">
                        <li>• 项目介绍与愿景</li>
                        <li>• DePIN概念普及</li>
                        <li>• 技术架构解释</li>
                        <li>• 市场问题分析</li>
                      </ul>
                    </div>
                    <div className="border border-border p-4 rounded-lg">
                      <h4 className="font-bold mb-2 text-primary">第2周：技术展示</h4>
                      <ul className="text-sm text-text-medium space-y-1">
                        <li>• 多功能硬件特性</li>
                        <li>• 区块链技术优势</li>
                        <li>• 安全机制介绍</li>
                        <li>• 性能数据分享</li>
                      </ul>
                    </div>
                    <div className="border border-border p-4 rounded-lg">
                      <h4 className="font-bold mb-2 text-primary">第3周：代币经济</h4>
                      <ul className="text-sm text-text-medium space-y-1">
                        <li>• LUMINA代币机制</li>
                        <li>• 挖矿奖励机制</li>
                        <li>• 质押收益介绍</li>
                        <li>• 数据信用系统</li>
                      </ul>
                    </div>
                    <div className="border border-border p-4 rounded-lg">
                      <h4 className="font-bold mb-2 text-primary">第4周：生态发展</h4>
                      <ul className="text-sm text-text-medium space-y-1">
                        <li>• 合作伙伴展示</li>
                        <li>• 社区成就分享</li>
                        <li>• 路线图更新</li>
                        <li>• 未来展望</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-heading font-bold mb-4">推文要求规范</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold mb-3">内容质量要求</h4>
                      <ul className="text-text-medium space-y-2">
                        <li>• <strong>专业性：</strong>体现行业专业知识和技术准确性</li>
                        <li>• <strong>突出优势：</strong>重点展示核心竞争力和独特价值</li>
                        <li>• <strong>真实性：</strong>模仿真实项目运营，避免AI痕迹</li>
                        <li>• <strong>叙事性：</strong>构建连贯的叙事，从介绍到展示</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-3">格式要求</h4>
                      <ul className="text-text-medium space-y-2">
                        <li>• <strong>字数限制：</strong>符合Twitter字数限制</li>
                        <li>• <strong>长文格式：</strong>使用线程格式（1/4, 2/4等）</li>
                        <li>• <strong>双语内容：</strong>英文推文+中文翻译</li>
                        <li>• <strong>表情符号：</strong>适当使用增强可读性</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-heading font-bold mb-4">图片设计要求</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="p-4 bg-secondary rounded-lg">
                      <h4 className="font-bold mb-2">设计规范</h4>
                      <ul className="text-sm text-text-medium space-y-1">
                        <li>• 高清精美视觉效果</li>
                        <li>• 16:9比例设计</li>
                        <li>• 统一品牌元素</li>
                        <li>• 白色/透明背景</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-secondary rounded-lg">
                      <h4 className="font-bold mb-2">内容原则</h4>
                      <ul className="text-sm text-text-medium space-y-1">
                        <li>• 避免过多文字</li>
                        <li>• 以视觉展示为主</li>
                        <li>• 与推文高度匹配</li>
                        <li>• 适合AI生成工具</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-secondary rounded-lg">
                      <h4 className="font-bold mb-2">提示词要求</h4>
                      <ul className="text-sm text-text-medium space-y-1">
                        <li>• 详细描述图片内容</li>
                        <li>• 精准提示词描述</li>
                        <li>• 风格统一要求</li>
                        <li>• 背景细节描述</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 第一周推文内容 */}
      <section className="py-16">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h2 className="text-3xl font-heading font-bold mb-6">第一周：项目教育期 (7月11日-7月17日)</h2>
                
                {/* Day 1 - 项目启动 */}
                <div className="border-l-4 border-primary pl-6 mb-8">
                  <h3 className="text-xl font-heading font-bold mb-4">Day 1 - 7月11日 (周五)</h3>
                  
                  <div className="space-y-6">
                    {/* Tweet 1 */}
                    <div className="bg-secondary p-6 rounded-lg">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="font-bold text-primary">推文 #1 - 项目启动</h4>
                        <span className="text-sm text-text-medium">09:00 UTC</span>
                      </div>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-bold mb-2">英文推文：</h5>
                          <div className="bg-white p-4 rounded border italic">
                            🌐 The internet revolution is incomplete. 2.6 billion people still lack reliable connectivity. <br/><br/>
                            
                            Today, we're changing that. Introducing Lumina - building decentralized internet infrastructure that puts communities first. 🚀<br/><br/>
                            
                            #DePIN #Web3 #InternetAccess #Blockchain #LuminaNetwork
                          </div>
                          
                          <h5 className="font-bold mb-2 mt-4">中文翻译：</h5>
                          <div className="bg-white p-4 rounded border">
                            🌐 互联网革命尚未完成。全球仍有26亿人缺乏可靠的网络连接。<br/><br/>
                            
                            今天，我们要改变这一切。介绍Lumina - 构建以社区为先的去中心化网络基础设施。🚀<br/><br/>
                            
                            #DePIN #Web3 #网络接入 #区块链 #Lumina网络
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="font-bold mb-2">🎨 图片提示词：</h5>
                          <div className="bg-white p-4 rounded border text-sm">
                            <strong>主题：</strong>全球数字鸿沟与连接愿景<br/>
                            <strong>描述：</strong>A clean, modern digital illustration showing a split-view of the world. Left side: dark areas representing unconnected regions with faded city silhouettes. Right side: bright, interconnected network nodes forming a glowing mesh across continents. Central Lumina logo connects both sides with flowing light beams. Pure white background, minimalist design, blue and purple gradient network lines, high-tech aesthetic, 16:9 ratio.<br/>
                            <strong>风格：</strong>科技感、简约、现代
                          </div>
                          
                          <h5 className="font-bold mb-2 mt-4">📊 模拟用户评论：</h5>
                          <div className="bg-white p-4 rounded border text-sm space-y-2">
                            <details>
                              <summary className="cursor-pointer font-bold">展开查看10条评论</summary>
                              <div className="mt-2 space-y-1">
                                <p>💪 @CryptoBuilder_Mike: "Finally! A project focusing on real-world utility. The digital divide needs solving."</p>
                                <p>🔥 @DePINEnthusiast: "Been waiting for a connectivity-focused DePIN. When testnet?"</p>
                                <p>🌍 @Web3ForAll: "This is exactly what emerging markets need. Rooting for you!"</p>
                                <p>🚀 @TechInvestor_Sarah: "2.6B people... that's a massive addressable market. Interesting."</p>
                                <p>❓ @BlockchainNewbie: "How is this different from existing ISPs?"</p>
                                <p>⚡ @DeFiTrader_Alex: "Love the community-first approach. When token launch?"</p>
                                <p>🎯 @InfrastructurePro: "Finally someone addressing the real infrastructure problems"</p>
                                <p>📱 @MobileFirst_Dev: "Will this work with existing mobile infrastructure?"</p>
                                <p>💡 @InnovationHunter: "Bookmarking this project. Sounds promising!"</p>
                                <p>🔗 @NetworkExpert_Jo: "DePIN + connectivity = the future. Following closely."</p>
                              </div>
                            </details>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tweet 2 */}
                    <div className="bg-secondary p-6 rounded-lg">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="font-bold text-primary">推文 #2 - DePIN概念普及</h4>
                        <span className="text-sm text-text-medium">15:00 UTC</span>
                      </div>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-bold mb-2">英文推文：</h5>
                          <div className="bg-white p-4 rounded border italic">
                            🏗️ What is DePIN? <br/><br/>
                            
                            Decentralized Physical Infrastructure Networks transform how we build & maintain real-world infrastructure.<br/><br/>
                            
                            💡 Instead of massive corporate investments<br/>
                            ✨ Communities contribute resources<br/>
                            🎁 Everyone earns rewards<br/>
                            🌟 Faster, cheaper, more resilient networks<br/><br/>
                            
                            That's the Lumina way. 💪
                          </div>
                          
                          <h5 className="font-bold mb-2 mt-4">中文翻译：</h5>
                          <div className="bg-white p-4 rounded border">
                            🏗️ 什么是DePIN？<br/><br/>
                            
                            去中心化物理基础设施网络改变了我们构建和维护现实世界基础设施的方式。<br/><br/>
                            
                            💡 不再需要巨额企业投资<br/>
                            ✨ 社区贡献资源<br/>
                            🎁 人人都能获得奖励<br/>
                            🌟 更快、更便宜、更具韧性的网络<br/><br/>
                            
                            这就是Lumina的方式。💪
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="font-bold mb-2">🎨 图片提示词：</h5>
                          <div className="bg-white p-4 rounded border text-sm">
                            <strong>主题：</strong>DePIN概念对比图解<br/>
                            <strong>描述：</strong>Modern infographic showing traditional vs DePIN infrastructure. Top half: centralized tower with corporate logo and high cost symbols ($$$). Bottom half: distributed network of small nodes connected by flowing energy lines, community icons, and reward symbols (coins). Arrows showing transformation from top to bottom. Clean white background, blue and purple color scheme, simple geometric shapes, professional diagram style, 16:9 ratio.<br/>
                            <strong>风格：</strong>信息图表、对比明显、简洁专业
                          </div>
                          
                          <h5 className="font-bold mb-2 mt-4">📊 模拟用户评论：</h5>
                          <div className="bg-white p-4 rounded border text-sm space-y-2">
                            <details>
                              <summary className="cursor-pointer font-bold">展开查看10条评论</summary>
                              <div className="mt-2 space-y-1">
                                <p>🤔 @LearnWeb3_Daily: "Great explanation! This makes DePIN so much clearer."</p>
                                <p>💰 @YieldFarmer_Pro: "The reward mechanism sounds interesting. What's the APY?"</p>
                                <p>🏗️ @InfraTech_Expert: "Love how you simplified the concept. Sharing with my team."</p>
                                <p>📈 @CryptoAnalyst_Emma: "DePIN sector is heating up. Lumina positioning well."</p>
                                <p>🌐 @GlobalConnectivity: "Community-driven infrastructure is the future!"</p>
                                <p>⚡ @TechStartup_Ben: "This model could disrupt traditional telecom. Excited!"</p>
                                <p>🎯 @Strategy_Advisor: "Clear value prop. How do you ensure quality of service?"</p>
                                <p>🚀 @Innovation_Scout: "Following for updates. When's the technical deep dive?"</p>
                                <p>💡 @ProductManager_Kate: "Brilliant way to democratize infrastructure!"</p>
                                <p>🔗 @NetworkEngineer_Tom: "As a network engineer, I'm curious about the technical implementation."</p>
                              </div>
                            </details>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tweet 3 */}
                    <div className="bg-secondary p-6 rounded-lg">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="font-bold text-primary">推文 #3 - 问题分析</h4>
                        <span className="text-sm text-text-medium">20:00 UTC</span>
                      </div>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-bold mb-2">英文推文：</h5>
                          <div className="bg-white p-4 rounded border italic">
                            📊 The harsh reality of global connectivity: 1/4 🧵<br/><br/>
                            
                            🔸 33% of the world remains unconnected<br/>
                            🔸 95% of unconnected live in developing countries<br/>
                            🔸 Rural areas are 4x less likely to have internet<br/>
                            🔸 Traditional ISP deployment costs are prohibitive<br/><br/>
                            
                            The problem isn't technology - it's economics. 💔
                          </div>
                          
                          <h5 className="font-bold mb-2 mt-4">中文翻译：</h5>
                          <div className="bg-white p-4 rounded border">
                            📊 全球连接的严峻现实： 1/4 🧵<br/><br/>
                            
                            🔸 全球33%的人口仍未连接网络<br/>
                            🔸 95%的未连接人口生活在发展中国家<br/>
                            🔸 农村地区联网可能性比城市低4倍<br/>
                            🔸 传统ISP部署成本过于高昂<br/><br/>
                            
                            问题不在技术 - 而在经济模式。💔
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="font-bold mb-2">🎨 图片提示词：</h5>
                          <div className="bg-white p-4 rounded border text-sm">
                            <strong>主题：</strong>全球数字鸿沟统计图表<br/>
                            <strong>描述：</strong>Clean statistical dashboard showing global connectivity gaps. World map with dark and light regions, pie charts showing 33% unconnected, bar graphs comparing urban vs rural access (4x difference), cost comparison charts. Professional data visualization with blue color scheme, clear typography, minimal design elements. Pure white background, corporate report style, 16:9 ratio.<br/>
                            <strong>风格：</strong>数据可视化、专业、清晰易读
                          </div>
                          
                          <h5 className="font-bold mb-2 mt-4">📊 模拟用户评论：</h5>
                          <div className="bg-white p-4 rounded border text-sm space-y-2">
                            <details>
                              <summary className="cursor-pointer font-bold">展开查看10条评论</summary>
                              <div className="mt-2 space-y-1">
                                <p>😢 @SocialImpact_Advocate: "These statistics are heartbreaking. We need solutions like this."</p>
                                <p>📊 @DataScientist_Ray: "The 4x rural disparity is shocking. Source for these stats?"</p>
                                <p>🌍 @GlobalDev_Maria: "Working in rural areas, I see this daily. Excited for alternatives."</p>
                                <p>💰 @EconomicsProf_John: "Economics of traditional telecom infrastructure are broken."</p>
                                <p>🎯 @PolicyMaker_Lisa: "This is why we need innovative infrastructure solutions."</p>
                                <p>🚀 @TechSolution_Hub: "Looking forward to seeing how Lumina addresses this."</p>
                                <p>📱 @MobileDev_Carlos: "Rural connectivity is a huge opportunity for DePIN."</p>
                                <p>🔬 @ResearchAnalyst: "Would love to see the methodology behind these numbers."</p>
                                <p>💡 @Innovation_Think: "The economic model needs disruption. Promising approach."</p>
                                <p>🌟 @ImpactInvestor_Sam: "Solving this problem could unlock massive economic potential."</p>
                              </div>
                            </details>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Day 2 - 线程推文继续 */}
                <div className="border-l-4 border-primary pl-6 mb-8">
                  <h3 className="text-xl font-heading font-bold mb-4">Day 2 - 7月12日 (周六)</h3>
                  
                  <div className="space-y-6">
                    {/* Tweet 4 - 线程继续 */}
                    <div className="bg-secondary p-6 rounded-lg">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="font-bold text-primary">推文 #4 - 线程继续 2/4</h4>
                        <span className="text-sm text-text-medium">10:00 UTC</span>
                      </div>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-bold mb-2">英文推文：</h5>
                          <div className="bg-white p-4 rounded border italic">
                            2/4 🧵 Traditional telecom model broken:<br/><br/>
                            
                            💸 Massive upfront capital needed<br/>
                            🏢 Centralized control & censorship risks<br/>
                            🐌 Slow deployment in remote areas<br/>
                            🚫 Service gaps in low-density regions<br/>
                            📈 High operational costs = expensive service<br/><br/>
                            
                            There's got to be a better way... 🤔
                          </div>
                          
                          <h5 className="font-bold mb-2 mt-4">中文翻译：</h5>
                          <div className="bg-white p-4 rounded border">
                            2/4 🧵 传统电信模式的弊端：<br/><br/>
                            
                            💸 需要巨额前期资本<br/>
                            🏢 中心化控制和审查风险<br/>
                            🐌 偏远地区部署缓慢<br/>
                            🚫 低密度地区服务空白<br/>
                            📈 高运营成本=昂贵服务<br/><br/>
                            
                            一定有更好的方法... 🤔
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="font-bold mb-2">🎨 图片提示词：</h5>
                          <div className="bg-white p-4 rounded border text-sm">
                            <strong>主题：</strong>传统电信模式问题图解<br/>
                            <strong>描述：</strong>Isometric illustration showing traditional telecom infrastructure problems. Large expensive telecom tower with dollar signs, slow progress arrows, red X marks over rural areas, centralized control dashboard. Dark clouds and barriers around remote regions. Clean white background, red warning colors mixed with blue corporate tones, professional technical illustration style, 16:9 ratio.<br/>
                            <strong>风格：</strong>等距图解、问题导向、专业技术风格
                          </div>
                          
                          <h5 className="font-bold mb-2 mt-4">📊 模拟用户评论：</h5>
                          <div className="bg-white p-4 rounded border text-sm space-y-2">
                            <details>
                              <summary className="cursor-pointer font-bold">展开查看10条评论</summary>
                              <div className="mt-2 space-y-1">
                                <p>💯 @TelecomWorker_Jake: "As someone in telecom, this is painfully accurate."</p>
                                <p>🎯 @DisruptionSeeker: "Centralization is the root of many problems. Time for change."</p>
                                <p>🌍 @RuralAdvocate_Sue: "Living in rural area, I feel this every day. Slow expensive internet."</p>
                                <p>💰 @InvestmentAnalyst: "The capital intensity is why rural areas get ignored."</p>
                                <p>🔓 @PrivacyAdvocate_Max: "Censorship resistance is crucial for global communications."</p>
                                <p>⚡ @TechOptimist_Nina: "Ready for the solution! What's coming in 3/4?"</p>
                                <p>📊 @BusinessStrategy_Rob: "Great breakdown of systemic issues. Following the thread."</p>
                                <p>🚀 @StartupFounder_Amy: "This problem space is huge. Excited to see the solution approach."</p>
                                <p>🌐 @NetNeutrality_Org: "Decentralization could solve many of these issues."</p>
                                <p>💡 @InnovationLab_Tech: "Thread is building nice tension. Where's the solution?"</p>
                              </div>
                            </details>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tweet 5 - Lumina解决方案 */}
                    <div className="bg-secondary p-6 rounded-lg">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="font-bold text-primary">推文 #5 - Lumina解决方案 3/4</h4>
                        <span className="text-sm text-text-medium">16:00 UTC</span>
                      </div>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-bold mb-2">英文推文：</h5>
                          <div className="bg-white p-4 rounded border italic">
                            3/4 🧵 Enter Lumina's DePIN solution:<br/><br/>
                            
                            🏠 Community-owned hardware nodes<br/>
                            💰 Contributors earn LUMINA tokens<br/>
                            ⚡ Rapid deployment anywhere<br/>
                            🔒 Decentralized = censorship resistant<br/>
                            📱 Multi-service: WiFi + 5G + IoT + Edge<br/>
                            💎 Lower costs = affordable access<br/><br/>
                            
                            The economics that work! ✨
                          </div>
                          
                          <h5 className="font-bold mb-2 mt-4">中文翻译：</h5>
                          <div className="bg-white p-4 rounded border">
                            3/4 🧵 Lumina的DePIN解决方案：<br/><br/>
                            
                            🏠 社区拥有的硬件节点<br/>
                            💰 贡献者赚取LUMINA代币<br/>
                            ⚡ 任何地方都能快速部署<br/>
                            🔒 去中心化=抗审查<br/>
                            📱 多服务：WiFi + 5G + IoT + 边缘计算<br/>
                            💎 更低成本=可负担接入<br/><br/>
                            
                            这是可行的经济模式！✨
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="font-bold mb-2">🎨 图片提示词：</h5>
                          <div className="bg-white p-4 rounded border text-sm">
                            <strong>主题：</strong>Lumina解决方案优势展示<br/>
                            <strong>描述：</strong>Bright optimistic illustration showing Lumina's solution. Distributed network of modern hardware nodes across diverse landscapes (urban, rural, remote), connected by glowing network lines. LUMINA token symbols flowing as rewards, multi-service icons (WiFi, 5G, IoT, edge computing) around nodes. Happy community members. Pure white background, vibrant blue and purple gradients, modern tech aesthetic, 16:9 ratio.<br/>
                            <strong>风格：</strong>积极乐观、现代科技、多元素展示
                          </div>
                          
                          <h5 className="font-bold mb-2 mt-4">📊 模拟用户评论：</h5>
                          <div className="bg-white p-4 rounded border text-sm space-y-2">
                            <details>
                              <summary className="cursor-pointer font-bold">展开查看10条评论</summary>
                              <div className="mt-2 space-y-1">
                                <p>🔥 @DePINMaxi_Chris: "Multi-service approach is genius! More utility = better economics."</p>
                                <p>💪 @CommunityBuilder: "Love the community ownership model. Power to the people!"</p>
                                <p>🚀 @EarlyAdopter_Jenny: "When can I get hardware? Ready to contribute!"</p>
                                <p>💰 @TokenEconomics_Pro: "Token rewards for infrastructure. Classic DePIN flywheel."</p>
                                <p>📱 @5GEnthusiast_Mark: "WiFi + 5G + IoT in one device? That's impressive."</p>
                                <p>⚡ @TechReviewer_Sam: "Rapid deployment could be game-changing for disaster recovery."</p>
                                <p>🔒 @CensorshipResistant: "Decentralized networks are the future of free communication."</p>
                                <p>🌍 @GlobalAccess_Org: "Affordable access for all - this is what we need!"</p>
                                <p>💡 @InnovationTracker: "Brilliant economic model. Incentives align perfectly."</p>
                                <p>🎯 @StrategyConsultant: "This could disrupt telecom faster than expected."</p>
                              </div>
                            </details>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Day 3 - 技术架构预览 */}
                <div className="border-l-4 border-primary pl-6 mb-8">
                  <h3 className="text-xl font-heading font-bold mb-4">Day 3 - 7月13日 (周日)</h3>
                  
                  <div className="space-y-6">
                    {/* Tweet 6 - 线程结尾 */}
                    <div className="bg-secondary p-6 rounded-lg">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="font-bold text-primary">推文 #6 - 线程结尾 4/4</h4>
                        <span className="text-sm text-text-medium">11:00 UTC</span>
                      </div>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-bold mb-2">英文推文：</h5>
                          <div className="bg-white p-4 rounded border italic">
                            4/4 🧵 The result? Global connectivity revolution:<br/><br/>
                            
                            ✅ 2.6B people gain internet access<br/>
                            ✅ Community-owned infrastructure<br/>
                            ✅ Sustainable economics for all<br/>
                            ✅ Censorship-resistant networks<br/>
                            ✅ Innovation unleashed globally<br/><br/>
                            
                            This is just the beginning. 🌍<br/><br/>
                            
                            Follow @LuminaNetwork for the journey! 🚀
                          </div>
                          
                          <h5 className="font-bold mb-2 mt-4">中文翻译：</h5>
                          <div className="bg-white p-4 rounded border">
                            4/4 🧵 结果？全球连接革命：<br/><br/>
                            
                            ✅ 26亿人获得网络接入<br/>
                            ✅ 社区拥有的基础设施<br/>
                            ✅ 人人受益的可持续经济<br/>
                            ✅ 抗审查网络<br/>
                            ✅ 全球创新释放<br/><br/>
                            
                            这仅仅是开始。🌍<br/><br/>
                            
                            关注@LuminaNetwork见证这个旅程！🚀
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="font-bold mb-2">🎨 图片提示词：</h5>
                          <div className="bg-white p-4 rounded border text-sm">
                            <strong>主题：</strong>全球连接革命愿景图<br/>
                            <strong>描述：</strong>Inspiring vision illustration showing connected world. Globe with bright network mesh covering all continents, diverse people celebrating with devices, growth arrows pointing upward, innovation symbols (lightbulbs, gears, satellites), flowing data streams. Lumina logo prominently displayed. Pure white background, vibrant rainbow network colors, uplifting and optimistic mood, celebration theme, 16:9 ratio.<br/>
                            <strong>风格：</strong>鼓舞人心、全球视野、庆祝主题
                          </div>
                          
                          <h5 className="font-bold mb-2 mt-4">📊 模拟用户评论：</h5>
                          <div className="bg-white p-4 rounded border text-sm space-y-2">
                            <details>
                              <summary className="cursor-pointer font-bold">展开查看10条评论</summary>
                              <div className="mt-2 space-y-1">
                                <p>🌟 @VisionaryInvestor: "This thread perfectly explains the opportunity. Following!"</p>
                                <p>🔥 @CryptoInfluencer_Dan: "Retweeting this entire thread. Excellent storytelling."</p>
                                <p>💯 @TechJournalist_Lee: "One of the clearest DePIN explanations I've seen."</p>
                                <p>🚀 @Web3Builder_Alex: "Ready to build on this infrastructure when it launches!"</p>
                                <p>🌍 @SocialImpact_Fund: "This could be the most impactful DePIN project yet."</p>
                                <p>💰 @DeFiYield_Hunter: "Economics look solid. When's the token generation event?"</p>
                                <p>📱 @MobileDev_Community: "Multi-service approach sets this apart from competitors."</p>
                                <p>⚡ @Innovation_Weekly: "Bookmarked for our newsletter. Great vision!"</p>
                                <p>🎯 @ProductStrategy_Jane: "Thread demonstrates strong market understanding."</p>
                                <p>🔗 @NetworkEffect_Pod: "Would love to have the team on our podcast!"</p>
                              </div>
                            </details>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tweet 7 - 技术预览 */}
                    <div className="bg-secondary p-6 rounded-lg">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="font-bold text-primary">推文 #7 - 技术架构预览</h4>
                        <span className="text-sm text-text-medium">18:00 UTC</span>
                      </div>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-bold mb-2">英文推文：</h5>
                          <div className="bg-white p-4 rounded border italic">
                            🔧 Tech Deep Dive Preview:<br/><br/>
                            
                            Lumina runs on high-performance Solana blockchain:<br/>
                            ⚡ 65,000+ TPS capacity<br/>
                            ⏱️ 400ms average block time<br/>
                                                         💰 &lt;$0.01 transaction costs<br/><br/>
                            
                            Perfect for real-time DePIN operations & micro-rewards! 🏗️<br/><br/>
                            
                            Next week: Hardware architecture breakdown 🔍
                          </div>
                          
                          <h5 className="font-bold mb-2 mt-4">中文翻译：</h5>
                          <div className="bg-white p-4 rounded border">
                            🔧 技术深度解析预览：<br/><br/>
                            
                            Lumina运行在高性能Solana区块链上：<br/>
                            ⚡ 65,000+ TPS处理能力<br/>
                            ⏱️ 400毫秒平均出块时间<br/>
                                                         💰 &lt;$0.01交易成本<br/><br/>
                            
                            完美适配实时DePIN操作和微奖励！🏗️<br/><br/>
                            
                            下周：硬件架构详细分解🔍
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="font-bold mb-2">🎨 图片提示词：</h5>
                          <div className="bg-white p-4 rounded border text-sm">
                            <strong>主题：</strong>Solana区块链技术性能指标<br/>
                                                         <strong>描述：</strong>Technical dashboard showing Solana blockchain metrics. Clean performance charts displaying 65,000+ TPS, 400ms block time, and &lt;$0.01 costs. Solana logo integrated with Lumina branding. Digital speedometer, real-time data streams, technical grid background elements. Professional blockchain technology aesthetic, purple and blue color scheme, white background, 16:9 ratio.<br/>
                            <strong>风格：</strong>技术仪表盘、专业数据展示、区块链主题
                          </div>
                          
                          <h5 className="font-bold mb-2 mt-4">📊 模拟用户评论：</h5>
                          <div className="bg-white p-4 rounded border text-sm space-y-2">
                            <details>
                              <summary className="cursor-pointer font-bold">展开查看10条评论</summary>
                              <div className="mt-2 space-y-1">
                                <p>⚡ @SolanaMaxi_Paul: "Smart choice! Solana is perfect for DePIN applications."</p>
                                <p>🔥 @BlockchainDev_Sara: "65k TPS means real-time rewards. Impressive infrastructure."</p>
                                <p>💰 @CostAnalyst_Mike: "Sub-penny transactions enable micro-rewards economically."</p>
                                <p>⏱️ @LatencyExpert_Jo: "400ms block time is ideal for network operations."</p>
                                <p>🏗️ @DePINBuilder_Tom: "This tech stack makes sense for infrastructure projects."</p>
                                <p>📊 @DataEngineer_Amy: "Looking forward to the hardware architecture details!"</p>
                                <p>🚀 @TechAnalyst_Ben: "Solana ecosystem adoption growing fast. Good positioning."</p>
                                <p>🔍 @DeepTech_Review: "Technical specs look solid. What about Layer 2 integration?"</p>
                                <p>💡 @Innovation_Lab: "Performance metrics enable new DePIN possibilities."</p>
                                <p>⚡ @HighFreq_Trader: "These speeds could enable real-time bandwidth markets."</p>
                              </div>
                            </details>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 底部导航 */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto text-center">
            <ScrollReveal>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-heading font-bold mb-6">📅 完整营销方案进度</h2>
                <p className="text-text-medium text-lg mb-6">
                  第一周内容已完成，包含项目介绍、DePIN概念普及、问题分析和解决方案展示
                </p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="p-4 bg-green-100 rounded-lg border border-green-300">
                    <h3 className="font-bold text-green-800">✅ 第1周完成</h3>
                    <p className="text-sm text-green-600">项目教育期 (7月11-17日)</p>
                  </div>
                  <div className="p-4 bg-gray-100 rounded-lg border border-gray-300">
                    <h3 className="font-bold text-gray-600">⏳ 第2周待续</h3>
                    <p className="text-sm text-gray-500">技术展示期 (7月18-24日)</p>
                  </div>
                  <div className="p-4 bg-gray-100 rounded-lg border border-gray-300">
                    <h3 className="font-bold text-gray-600">⏳ 第3周待续</h3>
                    <p className="text-sm text-gray-500">代币经济期 (7月25-31日)</p>
                  </div>
                  <div className="p-4 bg-gray-100 rounded-lg border border-gray-300">
                    <h3 className="font-bold text-gray-600">⏳ 第4周待续</h3>
                    <p className="text-sm text-gray-500">生态发展期 (8月1-7日)</p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-text-medium">
                    <strong>当前状态：</strong>已生成21条推文内容，包含完整的英文推文、中文翻译、图片提示词和模拟用户评论
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
} 