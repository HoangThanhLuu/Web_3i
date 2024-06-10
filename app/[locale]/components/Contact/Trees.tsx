
import Box from '@mui/material/Box';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import { TransitionProps } from '@mui/material/transitions';
import { alpha, styled } from '@mui/material/styles';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem, TreeItemProps, treeItemClasses } from '@mui/x-tree-view/TreeItem';
import React, { useEffect, useState } from 'react';
import { GetTreeInNode } from '../../apis/GetDataHome';
import { Collapse, Checkbox } from '@mui/material';
import axios from 'axios';

function MinusSquare(props: SvgIconProps) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
    </SvgIcon>
  );
}

function PlusSquare(props: SvgIconProps) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
    </SvgIcon>
  );
}

function CloseSquare(props: SvgIconProps) {
  return (
    <SvgIcon
      className="close"
      fontSize="inherit"
      style={{ width: 14, height: 14 }}
      {...props}
    >
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
    </SvgIcon>
  );
}
const CustomTreeItem = styled(TreeItem)(({ theme }) => ({
  [`& .${treeItemClasses.iconContainer}`]: {
    '& .close': {
      opacity: 0.3,
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
  },
}));
// Recursive function to get all descendants of a node
function getAllDescendants(data, parentCode) {
  const descendants = data
    .filter((item) => item.ParentCode === parentCode)
    .flatMap((item) => [item.Code, ...getAllDescendants(data, item.Code)]);

  return descendants;
}

function generateTreeItems(data, parentCode, checkedItems, setCheckedItems) {
  return data
    ?.filter((item) => item.ParentCode === parentCode)
    ?.map((item) => {
      const isChecked = checkedItems.includes(item.Code);

      const handleCheckboxChange = () => {
        const newCheckedItems = [...checkedItems];
        const descendants: any = getAllDescendants(data, item.Code);
        console.log('descendants', ...descendants);
        if (isChecked) {
          // Uncheck the item and its descendants
          newCheckedItems.splice(newCheckedItems.indexOf(item.Code), 1);
          descendants.map((vv) => {
            newCheckedItems.splice(newCheckedItems.indexOf(vv), descendants.length);
          })
        } else {
          // Check the item and its descendants
          newCheckedItems.push(item.Code, ...descendants);
        }

        setCheckedItems(newCheckedItems);
      };

      return (
        <CustomTreeItem
          key={item.Code}
          nodeId={item.Code.toString()}
          label={
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Checkbox
                onClick={(e) => e.stopPropagation()}
                className='mr-1.5'
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              {item.Title}
            </div>
          }
        >
          {generateTreeItems(data, item.Code, checkedItems, setCheckedItems)}
        </CustomTreeItem>
      );
    });
}


export default function Trees({ setCheckedNote }) {
  const [checkedItems, setCheckedItems] = useState([]);
  const [data, setData] = useState([]);
  console.log(data)
  // call api
  useEffect(() => {
    const dataMenuFetch = async () => {
      try {
        // const resLanguage = await GetTreeInNode('');
        // setData(resLanguage.data.Object);
        // console.log('resLanguage.data.Object', resLanguage.data.Object);

        const res = await axios.get('https://os.3i.com.vn/MobileCustomer/GetTreeModuleInNode')
        // console.log(res?.data?.Object)
        setData(res?.data?.Object);
      } catch (error) {
        console.log(error);
      }
    };

    dataMenuFetch();
  }, [data]);
  // lấy những tree có con
  function getNodesWithChildren(data, parentCode) {
    const nodesWithChildren = [];

    data.forEach((item) => {
      if (item.ParentCode === parentCode && item.HasChild) {
        nodesWithChildren.push(item.Code);
        // Nếu nút có con, thực hiện đệ quy để lấy con của nó
        const childNodes = getNodesWithChildren(data, item.Code);
        nodesWithChildren.push(...childNodes);
      }
    });

    return nodesWithChildren;
  }
  const abc = ['module3', 'module4', '001', 'module2', 'module1']
  useEffect(() => {
    const rs = data?.filter((d) => checkedItems.includes(d.Code) && d.HasChild === false)
    const rs1 = rs.map((b => b.Code))
    setCheckedNote(rs1)

  }, [checkedItems, setCheckedNote])

  console.log('checkedItems', checkedItems);
  return (
    <Box sx={{ minHeight: 270, flexGrow: 1, maxWidth: 300 }}>
      <TreeView
        aria-label="customized"
        defaultExpanded={abc}
        defaultCollapseIcon={<MinusSquare />}
        defaultExpandIcon={<PlusSquare />}
        // defaultEndIcon={<CloseSquare />}
        sx={{ overflowX: 'hidden' }}
        
      >
        {generateTreeItems(data, null, checkedItems, setCheckedItems)}
      </TreeView>
    </Box>
  );
}