import { useMemo, useState } from "react";
import { useTasks } from "../../context/tasks/useTasks";
import { Box, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { TasksActions } from './TasksActions.tsx'

export const TaskTable = () => {

  const { tasksList } = useTasks()

  const [pageSize, setPageSize] = useState(5)
  const [page, setPage] = useState(0)

  const columns = useMemo(() => [
    {field: 'name', headerName: 'Nombre', width: 150},
    {field: 'description', headerName: 'Descripcion', width: 150},
    {field: 'type', headerName: 'Tipo', width: 150},
    {field: 'place', headerName: 'Tienda', width: 150},
    {field: 'price', headerName: 'Precio', width: 150},
    {field: 'actions', headerName: 'Acciones', type: 'actions', renderCell: (params: any) => <TasksActions {...{params}} />},
  ], [])

  const rows = tasksList;
  console.log(rows)
  return ( 
    <>
      <Box
        sx={{height: 400, width: '80%'}}
        >
          <Typography variant="h3" component='h3' sx={{textAlign: 'center', mt:3, mb:3}}>
            Manage Task
          </Typography>
          <div className="p-8 bg-slate-300 m-10 rounded-md">
            <DataGrid
              // filterModel={{items: [], quickFilterValues: ['quick', 'filter']}}
              columns={columns}
              rows={rows}
              getRowId={(row) => row._id}
              pageSizeOptions={[5, 10 , 20]}
              paginationModel={ {pageSize: pageSize, page: page} }
              onPaginationModelChange={(newPageSize) => {setPageSize(newPageSize.pageSize); setPage(newPageSize.page)}}
              getRowSpacing={params => ({
                top:params.isFirstVisible ? 0 : 5,
                bottom: params.isLastVisible ? 0 : 5
              })}
              
              sx={{
                width: '100%'
              }}
            />
          </div>
      </Box>
    </>
  )
}