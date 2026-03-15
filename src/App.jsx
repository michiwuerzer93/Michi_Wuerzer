import { useState, useEffect } from "react";

/* ─── PHOTO: Replace src with your image path ─── */
/* Put your photo in /public/michi.jpg and uncomment the img tag in Hero */
const PHOTO_PATH = "/michi.jpg";

const sections = ["hero","about","timeline","skills","diplome","referenzen","contact"];

/* ═══════════════════════════════════════════
   NAV
   ═══════════════════════════════════════════ */
function Nav({ active, onNav }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav style={{
      position:"fixed",top:0,left:0,right:0,zIndex:100,
      background: scrolled ? "rgba(10,10,8,0.95)" : "rgba(10,10,8,0.7)",
      backdropFilter:"blur(14px)", WebkitBackdropFilter:"blur(14px)",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      padding:"0 24px",display:"flex",alignItems:"center",height:56,
      transition:"all 0.3s ease"
    }}>
      <span onClick={()=>onNav("hero")} style={{fontFamily:"'Playfair Display',serif",fontSize:18,fontWeight:700,color:"#e8e4dc",letterSpacing:"-0.02em",marginRight:40,cursor:"pointer"}}>MW</span>
      <div style={{display:"flex",gap:4,overflow:"auto",msOverflowStyle:"none",scrollbarWidth:"none"}}>
        {[["about","Über mich"],["timeline","Karriere"],["skills","Skills"],["diplome","Zertifikate"],["referenzen","Referenzen"],["contact","Kontakt"]].map(([id,label])=>(
          <button key={id} onClick={()=>onNav(id)} style={{
            background:"none",border:"none",
            color:active===id?"#e8e4dc":"rgba(232,228,220,0.4)",
            fontSize:13,fontFamily:"'DM Sans',sans-serif",
            fontWeight:active===id?600:400,
            padding:"8px 14px",cursor:"pointer",transition:"all 0.3s",
            borderBottom:active===id?"2px solid #c9a96e":"2px solid transparent",
            whiteSpace:"nowrap"
          }}>{label}</button>
        ))}
      </div>
    </nav>
  );
}

/* ═══════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════ */
function Hero({ id }) {
  return (
    <section id={id} style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:"120px 24px 80px",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:0,left:0,right:0,bottom:0,background:"radial-gradient(ellipse at 30% 20%, rgba(201,169,110,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(201,169,110,0.04) 0%, transparent 50%)"}}/>
      <div style={{maxWidth:900,position:"relative",zIndex:1,display:"flex",alignItems:"center",gap:48,flexWrap:"wrap",justifyContent:"center"}}>
        <div style={{flex:"1 1 420px",minWidth:280}}>
          <div style={{display:"inline-block",padding:"6px 20px",border:"1px solid rgba(201,169,110,0.3)",borderRadius:100,fontSize:11,fontFamily:"'DM Sans',sans-serif",color:"#c9a96e",letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:28,animation:"fadeIn 1s ease"}}>Head of IT, Systems & Infrastructure</div>
          <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(44px,7vw,72px)",fontWeight:700,color:"#e8e4dc",lineHeight:1.05,margin:"0 0 20px",letterSpacing:"-0.03em",animation:"fadeIn 1s ease 0.2s both"}}>
            Michi<br/>Würzer
          </h1>
          <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:17,color:"rgba(232,228,220,0.5)",lineHeight:1.7,maxWidth:480,margin:"0 0 32px",animation:"fadeIn 1s ease 0.4s both"}}>
            Vom Werkstattboden ins C-Level. IT-Stratege, ERP-Architekt und Digital Leader — mit über einem Jahrzehnt Erfahrung in Systemarchitektur, E-Commerce und IT-Führung.
          </p>
          <div style={{display:"flex",gap:10,flexWrap:"wrap",animation:"fadeIn 1s ease 0.6s both"}}>
            {["ERP & Systemarchitektur","E-Commerce & D2C","Change Management","Startup → Enterprise"].map(t=>(
              <span key={t} style={{padding:"7px 16px",background:"rgba(201,169,110,0.08)",border:"1px solid rgba(201,169,110,0.15)",borderRadius:8,fontSize:12,fontFamily:"'DM Sans',sans-serif",color:"#c9a96e"}}>{t}</span>
            ))}
          </div>
        </div>

        {/* ── PHOTO ── */}
        <div style={{flex:"0 0 auto",animation:"fadeIn 1s ease 0.5s both"}}>
          {/*
            OPTION A: Placeholder (active by default)
            OPTION B: Dein Foto — uncomment below and comment out Option A
          */}

          {/* OPTION A: Placeholder */}
          <div style={{width:230,height:300,borderRadius:20,border:"1px solid rgba(201,169,110,0.15)",background:"linear-gradient(145deg, rgba(201,169,110,0.06) 0%, rgba(201,169,110,0.02) 100%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:12}}>
            <div style={{width:64,height:64,borderRadius:"50%",border:"2px solid rgba(201,169,110,0.2)",display:"flex",alignItems:"center",justifyContent:"center"}}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(201,169,110,0.35)" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <span style={{fontSize:12,fontFamily:"'DM Sans',sans-serif",color:"rgba(201,169,110,0.3)"}}>Dein Foto hier</span>
          </div>

          {/* OPTION B: Echtes Foto — entferne die Kommentare und lösche Option A
          <img
            src={PHOTO_PATH}
            alt="Michi Würzer"
            style={{width:230,height:300,borderRadius:20,objectFit:"cover",border:"1px solid rgba(201,169,110,0.15)"}}
          />
          */}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   ABOUT
   ═══════════════════════════════════════════ */
function About({ id }) {
  return (
    <section id={id} style={{padding:"100px 24px",maxWidth:900,margin:"0 auto"}}>
      <Label text="Über mich"/>
      <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(28px,5vw,36px)",color:"#e8e4dc",margin:"0 0 28px",fontWeight:600}}>Systemdenker mit Hands-on-Mentalität.</h2>
      <p style={{fontSize:16,color:"rgba(232,228,220,0.6)",lineHeight:1.8,margin:"0 0 16px"}}>
        Mein Karriereweg ist ungewöhnlich: Er begann mit einer Metallbauer-Lehre, führte über den Aussendienst-Verkauf und zwei eidgenössische Fachausweise in die digitale Welt — und von dort in die IT-Führung bei internationalen Brands. Diesen Weg habe ich nicht geplant, sondern Schritt für Schritt gebaut. Genau so arbeite ich heute: pragmatisch, lösungsorientiert, immer mit Blick aufs Ganze.
      </p>
      <p style={{fontSize:16,color:"rgba(232,228,220,0.6)",lineHeight:1.8,margin:"0 0 0"}}>
        Seit meinem Einstieg bei 20 Minuten im digitalen Crossmedia-Verkauf habe ich die komplette Wertschöpfungskette durchlaufen: Programmatic Advertising bei watson.ch, eigenes E-Commerce-Business mit GS Food, ERP-Implementierungen und Microservice-Architekturen bei BLACKROLL, und heute die IT-Transformation bei Tour de Suisse. Was mich unterscheidet: Ich verstehe sowohl die Business-Seite als auch die Technik — und kann zwischen beiden übersetzen.
      </p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:16,marginTop:32}}>
        {[
          ["Standort","Winterthur, Schweiz"],
          ["Sprachen","DE (Muttersprache), EN (C1)"],
          ["Fokus","ERP, IT-Architektur, E-Commerce"],
          ["Führung","Head-Level seit 2022"],
        ].map(([label,val])=>(
          <div key={label} style={{background:"rgba(201,169,110,0.04)",border:"1px solid rgba(201,169,110,0.1)",borderRadius:12,padding:"16px 20px"}}>
            <div style={{fontSize:11,color:"#c9a96e",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:6}}>{label}</div>
            <div style={{fontSize:14,color:"#e8e4dc",lineHeight:1.5}}>{val}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   TIMELINE
   ═══════════════════════════════════════════ */
const career = [
  {period:"10/2024 – heute",company:"Tour de Suisse Rad AG",role:"Head of IT, Systems & Infrastructure",desc:"Gesamtverantwortung IT-Strategie und Infrastruktur. Odoo-Implementierung, AS400→Cloud-Migration, Aufbau der neuen Systemlandschaft. Change Management über alle Abteilungen.",highlight:true,tag:"Aktuell"},
  {period:"06/2022 – 09/2024",company:"BLACKROLL AG",role:"Head of Operations, IT & Systeme",desc:"Leitung der Abteilung Systeme & Architektur. PO ERP/CRM/IT-Architektur. Gesamtverantwortung O2C, Customer Service, Einkauf (Inbound), IT-Support L1/L2. Business Intelligence mit Power BI. Zeugnis vom CEO: «höchst motivierter und kompetenter Kadermitarbeiter».",highlight:true,tag:"Zeugnis: Note 1"},
  {period:"01/2019 – 05/2022",company:"BLACKROLL AG",role:"PM Digitalization & ERP",desc:"ERP-Einführung von Planung bis Go-Live. Projektleitung Microservice-Architektur mit eigener Middleware und Gateways. Order-to-Cash-Gesamtverantwortung. Einführung Remote-Work-Prozesse. KPI-Reporting für GL.",highlight:false,tag:null},
  {period:"08/2017 – 12/2018",company:"siroop AG (Coop)",role:"PM Operational Excellence",desc:"Product Owner ERP. Planung, Konzeption und Einführung des neuen ERP. Salesforce Administration und Service Cloud-Entwicklung. Einführung Omnichannel Customer Service. BI-Analysen und Reportings.",highlight:false,tag:"Zeugnis: Note 1"},
  {period:"02/2015 – 07/2017",company:"GS Food Sporternährung",role:"Geschäftsführer & Inhaber",desc:"Eigenes Business von Grund auf gebaut. Onlineshop-Konzeption und Realisierung. ERP Odoo eingeführt. Logistik-Outsourcing geplant und umgesetzt. Umstrukturierung zum reinen Online-Shop.",highlight:true,tag:"Unternehmertum"},
  {period:"05/2013 – 01/2015",company:"watson.ch (Gründerteam)",role:"Leiter Vermarktung",desc:"Aufbauphase eines der grössten Schweizer Newsportale. Projektleitung Vermarktung, Aufbau Sales-Team, Key Account Management. Aufbau der kompletten Ad-Tech-Infrastruktur: Programmatic Advertising, RTB/RTA, SSP-Setup (Rubicon, Yieldlab, Appnexus, Google). CRM-Aufbau.",highlight:false,tag:"Zeugnis: Note 1–2"},
  {period:"06/2011 – 04/2013",company:"20 Minuten AG",role:"Key Account Manager",desc:"Crossmedia-Verkauf über alle Kanäle (Online, Mobile, Print). Key Accounts und Media-Agenturen. Tamedia-Netzwerke. Crossmedia-Briefings. Einstieg in die digitale Medienwelt.",highlight:false,tag:"Zeugnis: Note 1–2"},
];

function Timeline({ id }) {
  const [open,setOpen] = useState(null);
  return (
    <section id={id} style={{padding:"100px 24px",maxWidth:820,margin:"0 auto"}}>
      <Label text="Karriere"/>
      <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(28px,5vw,36px)",color:"#e8e4dc",margin:"0 0 12px",fontWeight:600}}>Digitale Karriere seit 2011</h2>
      <p style={{fontSize:15,color:"rgba(232,228,220,0.4)",margin:"0 0 44px"}}>Von Crossmedia-Verkauf über Programmatic Advertising und E-Commerce-Gründung bis zur IT-Führung.</p>
      <div style={{position:"relative",paddingLeft:32}}>
        <div style={{position:"absolute",left:7,top:8,bottom:8,width:2,background:"linear-gradient(to bottom, #c9a96e, rgba(201,169,110,0.08))"}}/>
        {career.map((c,i)=>(
          <div key={i} onClick={()=>setOpen(open===i?null:i)} style={{
            position:"relative",marginBottom:6,cursor:"pointer",padding:"16px 20px",borderRadius:14,
            background:open===i?"rgba(201,169,110,0.05)":"transparent",
            border:open===i?"1px solid rgba(201,169,110,0.1)":"1px solid transparent",
            transition:"all 0.3s"
          }}>
            <div style={{position:"absolute",left:-28,top:22,width:12,height:12,borderRadius:"50%",background:c.highlight?"#c9a96e":"rgba(201,169,110,0.25)",border:c.highlight?"2px solid rgba(201,169,110,0.4)":"none",boxShadow:c.highlight?"0 0 12px rgba(201,169,110,0.25)":"none"}}/>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:8}}>
              <div style={{flex:1,minWidth:200}}>
                <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
                  <span style={{fontSize:12,color:"#c9a96e",letterSpacing:"0.05em"}}>{c.period}</span>
                  {c.tag && <span style={{
                    padding:"2px 10px",borderRadius:100,fontSize:10,fontWeight:600,
                    background:c.tag==="Aktuell"?"rgba(201,169,110,0.15)":c.tag==="Unternehmertum"?"rgba(214,90,48,0.12)":"rgba(232,228,220,0.05)",
                    border:"1px solid "+(c.tag==="Aktuell"?"rgba(201,169,110,0.3)":c.tag==="Unternehmertum"?"rgba(214,90,48,0.2)":"rgba(232,228,220,0.08)"),
                    color:c.tag==="Aktuell"?"#c9a96e":c.tag==="Unternehmertum"?"#d87a50":"rgba(232,228,220,0.45)"
                  }}>{c.tag}</span>}
                </div>
                <h3 style={{fontSize:16,fontWeight:600,color:"#e8e4dc",margin:"6px 0 2px"}}>{c.company}</h3>
                <span style={{fontSize:14,color:"rgba(232,228,220,0.45)"}}>{c.role}</span>
              </div>
              <span style={{fontSize:18,color:"rgba(232,228,220,0.25)",transition:"transform 0.3s",transform:open===i?"rotate(180deg)":"rotate(0)",marginTop:8}}>{"\u25BE"}</span>
            </div>
            {open===i && <p style={{fontSize:14,color:"rgba(232,228,220,0.55)",lineHeight:1.75,margin:"14px 0 0",paddingTop:12,borderTop:"1px solid rgba(232,228,220,0.04)",animation:"fadeIn 0.3s ease"}}>{c.desc}</p>}
          </div>
        ))}
      </div>
      <div style={{marginTop:28,padding:"14px 20px",background:"rgba(232,228,220,0.02)",border:"1px solid rgba(232,228,220,0.05)",borderRadius:12}}>
        <p style={{fontSize:13,color:"rgba(232,228,220,0.35)",margin:0,lineHeight:1.6}}>
          <span style={{color:"rgba(232,228,220,0.5)"}}>Davor:</span> Metallbauer-Lehre (EFZ 2001), Aussendienst-Verkauf bei Würth, Séchy und Philip Morris, Dozent an der Swiss Marketing Academy, Sprachaufenthalt USA (Cambridge Advanced). Zwei eidg. Fachausweise in Verkauf und Marketing (2008). Diese handwerkliche und verkäuferische Basis prägt meinen Arbeitsstil bis heute.
        </p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SKILLS
   ═══════════════════════════════════════════ */
const skillData = [
  {cat:"ERP & Systemarchitektur",color:"#c9a96e",items:[["Odoo (Implementierung & Admin)",95],["ERP-Projektleitung (Planung→Go-Live)",92],["Microservice-Architektur / Middleware",88],["MyFactory / Legacy-Migration (AS400)",85],["Schnittstellendesign (Logistik, Shops)",87]]},
  {cat:"IT-Strategie & Operations",color:"#8ba5b5",items:[["IT-Strategie & Budgetverantwortung",88],["Order-to-Cash (End-to-End)",90],["Change Management & Stakeholder",88],["IT-Support L1/L2 Aufbau",80],["Remote-Work-Einführung",78]]},
  {cat:"Digital & E-Commerce",color:"#b5917a",items:[["E-Commerce (Shopify, Magento, Odoo)",85],["Salesforce (Admin + Service Cloud)",82],["Power BI / Tableau",78],["Programmatic Advertising / RTB",80],["CRM (Salesforce, ZOHO, Pipedrive)",83]]},
];

function Skills({ id }) {
  return (
    <section id={id} style={{padding:"100px 24px",maxWidth:900,margin:"0 auto"}}>
      <Label text="Kompetenzen"/>
      <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(28px,5vw,36px)",color:"#e8e4dc",margin:"0 0 48px",fontWeight:600}}>Skills & Systeme</h2>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:24}}>
        {skillData.map(g=>(
          <div key={g.cat} style={{background:"rgba(201,169,110,0.03)",border:"1px solid rgba(201,169,110,0.08)",borderRadius:16,padding:"24px 20px"}}>
            <h3 style={{fontSize:13,fontWeight:600,color:g.color,textTransform:"uppercase",letterSpacing:"0.1em",margin:"0 0 20px"}}>{g.cat}</h3>
            {g.items.map(([name,val])=>(
              <div key={name} style={{marginBottom:14}}>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
                  <span style={{fontSize:13,color:"rgba(232,228,220,0.65)"}}>{name}</span>
                </div>
                <div style={{height:3,borderRadius:2,background:"rgba(232,228,220,0.06)"}}>
                  <div style={{height:3,borderRadius:2,background:`linear-gradient(90deg,${g.color},${g.color}44)`,width:`${val}%`,transition:"width 1s ease"}}/>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div style={{marginTop:32}}>
        <div style={{fontSize:11,color:"rgba(232,228,220,0.3)",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:12}}>Tech-Stack</div>
        <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
          {["Odoo","MyFactory","Salesforce","ZOHO","Pipedrive","Klaviyo","Shopify","Magento","Power BI","Tableau","Office365","Google Apps","Python","Microservices","REST APIs"].map(t=>(
            <span key={t} style={{padding:"5px 14px",border:"1px solid rgba(201,169,110,0.1)",borderRadius:100,fontSize:12,color:"rgba(232,228,220,0.45)"}}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   DIPLOME
   ═══════════════════════════════════════════ */
const diplome = [
  {title:"Eidg. Marketingplaner mit Fachausweis",org:"Bundesamt für Berufsbildung, Bern",date:"2008",tier:1},
  {title:"Eidg. Verkaufskoordinator mit Fachausweis",org:"Bundesamt für Berufsbildung, Bern",date:"2008",tier:1},
  {title:"Cambridge Advanced (CAE) — C1",org:"CISL San Diego, USA",date:"2010",tier:2},
  {title:"Bürofachdiplom VSH",org:"HSO Zürich, berufsbegleitend",date:"2007",tier:2},
  {title:"EFZ Metallbauer",org:"4-jährige Lehre, Kanton Zürich",date:"2001",tier:3},
];

function Diplome({ id }) {
  return (
    <section id={id} style={{padding:"100px 24px",maxWidth:900,margin:"0 auto"}}>
      <Label text="Aus- & Weiterbildung"/>
      <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(28px,5vw,36px)",color:"#e8e4dc",margin:"0 0 48px",fontWeight:600}}>Zertifikate & Diplome</h2>
      <div style={{display:"grid",gap:10}}>
        {diplome.map((d,i)=>(
          <div key={i} style={{display:"flex",alignItems:"center",gap:16,padding:"14px 20px",background:"rgba(201,169,110,0.03)",border:"1px solid rgba(201,169,110,0.08)",borderRadius:12,flexWrap:"wrap"}}>
            <span style={{
              padding:"4px 12px",borderRadius:100,fontSize:11,fontWeight:600,whiteSpace:"nowrap",minWidth:80,textAlign:"center",
              background:d.tier===1?"rgba(201,169,110,0.15)":"rgba(232,228,220,0.04)",
              border:"1px solid "+(d.tier===1?"rgba(201,169,110,0.3)":"rgba(232,228,220,0.07)"),
              color:d.tier===1?"#c9a96e":"rgba(232,228,220,0.4)"
            }}>{d.tier===1?"Eidg. FA":d.tier===2?"Diplom":"EFZ"}</span>
            <div style={{flex:1,minWidth:200}}>
              <div style={{fontSize:15,fontWeight:600,color:"#e8e4dc"}}>{d.title}</div>
              <div style={{fontSize:13,color:"rgba(232,228,220,0.35)"}}>{d.org}</div>
            </div>
            <span style={{fontSize:13,color:"rgba(232,228,220,0.25)",whiteSpace:"nowrap"}}>{d.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   REFERENZEN
   ═══════════════════════════════════════════ */
function Referenzen({ id }) {
  return (
    <section id={id} style={{padding:"100px 24px",maxWidth:900,margin:"0 auto"}}>
      <Label text="Referenzen"/>
      <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(28px,5vw,36px)",color:"#e8e4dc",margin:"0 0 48px",fontWeight:600}}>Was andere sagen</h2>

      {/* Peter Rohn — Featured */}
      <div style={{background:"rgba(201,169,110,0.04)",border:"1px solid rgba(201,169,110,0.12)",borderRadius:20,padding:"32px 28px",marginBottom:28,position:"relative"}}>
        <div style={{position:"absolute",top:16,left:28,fontSize:72,fontFamily:"'Playfair Display',serif",color:"rgba(201,169,110,0.12)",lineHeight:1}}>"</div>
        <div style={{paddingTop:36}}>
          <p style={{fontFamily:"'Playfair Display',serif",fontSize:18,color:"rgba(232,228,220,0.8)",lineHeight:1.8,fontStyle:"italic",margin:"0 0 24px"}}>
            Michi's strengths lie in structuring IT processes, building scalable system landscapes and integrating partners in cross-company process chains. I would strongly recommend Michi for any IT, process and system-related function, particularly in e-commerce and end consumer driven businesses.
          </p>
          <div style={{display:"flex",alignItems:"center",gap:14}}>
            <div style={{width:48,height:48,borderRadius:"50%",background:"rgba(201,169,110,0.12)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,fontWeight:600,color:"#c9a96e"}}>PR</div>
            <div>
              <div style={{fontSize:15,fontWeight:600,color:"#e8e4dc"}}>Peter Rohn</div>
              <div style={{fontSize:13,color:"rgba(232,228,220,0.4)"}}>Ex-CEO BLACKROLL AG · Ex-COO siroop AG</div>
              <div style={{fontSize:12,color:"rgba(232,228,220,0.25)",marginTop:2}}>6 Jahre direkte Zusammenarbeit</div>
            </div>
          </div>
        </div>
      </div>

      {/* Zeugnis-Cards */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:14}}>
        {[
          {co:"BLACKROLL AG",note:"Note 1",quote:"Höchst motivierter und kompetenter Kadermitarbeiter, der mit persönlichem Einsatz über das geforderte Maß hinaus agierte.",by:"Marius Keckeisen, CEO",period:"5 J. 9 Mt."},
          {co:"siroop AG",note:"Note 1",quote:"Äusserst umfassendes und hervorragendes Fachwissen, das er stets sehr sicher und erfolgreich einsetzte.",by:"Operations Management",period:"1 J. 4 Mt."},
          {co:"watson.ch",note:"Note 1–2",quote:"Vorbildlich für seine Aufgaben eingesetzt und sich dem Unternehmen verpflichtet. Vermittelnd bei konkurrierenden Ansichten.",by:"Hansi Voigt (CEO) & Steven Goodman (CMO)",period:"1 J. 9 Mt."},
          {co:"20 Minuten AG",note:"Note 1–2",quote:"Einwandfreie Arbeitsqualität. Kostenbewusst. Wesentlicher Beitrag zur Lösung von Problemen.",by:"Séverine Hörler & Claudia Held",period:"1 J. 10 Mt."},
        ].map(r=>(
          <div key={r.co} style={{background:"rgba(232,228,220,0.02)",border:"1px solid rgba(232,228,220,0.06)",borderRadius:16,padding:"20px",display:"flex",flexDirection:"column"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
              <span style={{fontSize:14,fontWeight:600,color:"#e8e4dc"}}>{r.co}</span>
              <span style={{padding:"3px 10px",background:"rgba(201,169,110,0.1)",borderRadius:100,fontSize:11,color:"#c9a96e",fontWeight:600}}>{r.note}</span>
            </div>
            <p style={{fontSize:13,color:"rgba(232,228,220,0.5)",lineHeight:1.7,fontStyle:"italic",margin:"0 0 12px",flex:1}}>«{r.quote}»</p>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <span style={{fontSize:12,color:"rgba(232,228,220,0.3)"}}>{r.by}</span>
              <span style={{fontSize:11,color:"rgba(232,228,220,0.2)"}}>{r.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   CONTACT
   ═══════════════════════════════════════════ */
function Contact({ id }) {
  return (
    <section id={id} style={{padding:"100px 24px 80px",maxWidth:700,margin:"0 auto",textAlign:"center"}}>
      <Label text="Kontakt"/>
      <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(28px,5vw,36px)",color:"#e8e4dc",margin:"0 0 16px",fontWeight:600}}>Let's connect.</h2>
      <p style={{fontSize:16,color:"rgba(232,228,220,0.4)",margin:"0 0 40px",lineHeight:1.7}}>Offen für Beratungsmandate, Projekte und Austausch.</p>
      <div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap"}}>
        {[
          ["E-Mail","mailto:michiwuerzer@gmail.com"],
          ["+41 78 670 93 93","tel:+41786709393"],
          ["LinkedIn","https://www.linkedin.com/in/michiwuerzer/"],
        ].map(([label,href])=>(
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{
            padding:"12px 28px",border:"1px solid rgba(201,169,110,0.2)",borderRadius:100,fontSize:14,color:"#c9a96e",transition:"all 0.3s"
          }}
            onMouseEnter={e=>{e.target.style.background="rgba(201,169,110,0.08)";e.target.style.borderColor="rgba(201,169,110,0.35)"}}
            onMouseLeave={e=>{e.target.style.background="transparent";e.target.style.borderColor="rgba(201,169,110,0.2)"}}
          >{label}</a>
        ))}
      </div>
      <div style={{marginTop:64,padding:"20px 0",borderTop:"1px solid rgba(232,228,220,0.04)",fontSize:12,color:"rgba(232,228,220,0.15)"}}>
        Winterthur, Schweiz · {new Date().getFullYear()}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════ */
function Label({ text }) {
  return <div style={{fontSize:11,color:"#c9a96e",textTransform:"uppercase",letterSpacing:"0.2em",marginBottom:12}}>{text}</div>;
}

/* ═══════════════════════════════════════════
   APP
   ═══════════════════════════════════════════ */
export default function App() {
  const [active, setActive] = useState("hero");
  const onNav = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { threshold: 0.25 });
    sections.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Nav active={active} onNav={onNav}/>
      <Hero id="hero"/>
      <About id="about"/>
      <Timeline id="timeline"/>
      <Skills id="skills"/>
      <Diplome id="diplome"/>
      <Referenzen id="referenzen"/>
      <Contact id="contact"/>
    </>
  );
}
